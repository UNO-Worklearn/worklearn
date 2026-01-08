import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import "./Home.css";

function Home({ user }) {
  const videoRef = useRef(null);

  // Use refs for "gate" state to avoid effect dependency issues / re-renders
  const maxWatchedRef = useRef(0);
  const unlockedRef = useRef(false);

  const [videoReady, setVideoReady] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // -----------------------------------------
  // Redirect if already logged in
  // -----------------------------------------
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // -----------------------------------------
  // Bulletproof video gate (MUI v4 + Vercel safe)
  // -----------------------------------------
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoReady(true);
    };

    const handleTimeUpdate = () => {
      // Some browsers briefly report 0/NaN duration
      if (!video.duration || Number.isNaN(video.duration)) return;
      if (video.seeking) return;

      // Track maximum watched time
      if (video.currentTime > maxWatchedRef.current) {
        maxWatchedRef.current = video.currentTime;
      }

      // Unlock at 95% watched (avoids unreliable onEnded)
      if (!unlockedRef.current && maxWatchedRef.current / video.duration >= 0.95) {
        unlockedRef.current = true;
        setShowSignup(true);
      }
    };

    const handleSeeking = () => {
      // Prevent fast-forwarding beyond watched point (allow small drift)
      const allowed = maxWatchedRef.current + 0.25;

      // If duration isn't known yet, don't enforce
      if (!video.duration || Number.isNaN(video.duration)) return;

      // Allow seeking backward freely; block seeking forward past allowed
      if (video.currentTime > allowed) {
        video.currentTime = maxWatchedRef.current;
      }
    };

    const handleEnded = () => {
      // Backup: if ended fires, unlock as well
      if (!unlockedRef.current) {
        unlockedRef.current = true;
        setShowSignup(true);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("seeking", handleSeeking);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("seeking", handleSeeking);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // -----------------------------------------
  // Render
  // -----------------------------------------
  return (
    <Box className="home-container">
      {/* Video Section */}
      <Box className="video-wrapper" style={{ textAlign: "center" }}>
        {!showSignup && (
          <Typography
            style={{
              marginBottom: "16px",
              fontStyle: "italic",
              opacity: 0.7
            }}
          >
            Please watch the full video to unlock sign up.
          </Typography>
        )}

        <video
          ref={videoRef}
          preload="auto"
          controls
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "12px",
            backgroundColor: "#000",
            // Optional: fade in once ready (if your CSS uses .show)
            opacity: videoReady ? 1 : 0
          }}
        >
          <source
            src="https://uno-worklearn.s3.us-east-2.amazonaws.com/worklearn-videos/IntroWorklearn.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {showSignup && (
          <Button
            variant="contained"
            color="primary"
            href="/register"
            style={{ marginTop: "24px" }}
          >
            Create Your Account
          </Button>
        )}
      </Box>

      {/* Text Content */}
      <Box className="home-text-section" style={{ paddingTop: "40px" }}>
        <Typography variant="h4" gutterBottom className="home-title">
          Welcome to the Work-Learn Project!
        </Typography>

        <Typography className="home-paragraph" style={{ marginBottom: "16px" }}>
          MOOCs – Massive Open Online Courses – promised to democratize education by
          allowing anyone with a computer and internet connection to learn from anywhere.
          Unfortunately, most people don’t complete MOOC classes, especially people who
          are not already highly successful. The Work-Learn Project is investigating how
          to help people stay engaged and succeed through an incentivized MOOC.
        </Typography>

        <Typography className="home-paragraph">
          With support from the National Science Foundation (Award #2100355), researchers
          from the University of Nebraska at Omaha (UNO) and Southern Methodist University
          (SMU) have partnered with Siena-Francis House to test the Work-Learn Project.
          Participants learn computational thinking, Python, and COBOL.
        </Typography>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Home);
