import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import "./Home.css";

function Home({ user }) {
  const videoRef = useRef(null);

  const [videoReady, setVideoReady] = useState(false);
  const [maxWatched, setMaxWatched] = useState(0);
  const [showSignup, setShowSignup] = useState(false);

  // -----------------------------------------
  // Redirect if already logged in
  // -----------------------------------------
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // -----------------------------------------
  // Bulletproof video gate
  // -----------------------------------------
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoReady(true);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || video.seeking) return;

      setMaxWatched(prev => {
        const current = Math.max(prev, video.currentTime);

        // Unlock signup at 95%
        if (current / video.duration >= 0.95) {
          setShowSignup(true);
        }

        return current;
      });
    };

    const handleSeeking = () => {
      if (video.currentTime > maxWatched + 0.25) {
        video.currentTime = maxWatched;
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("seeking", handleSeeking);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("seeking", handleSeeking);
    };
  }, [maxWatched]);

  // -----------------------------------------
  // Render
  // -----------------------------------------
  return (
    <Box className="home-container">

      {/* Video Section */}
      <Box className="video-wrapper" sx={{ textAlign: "center" }}>

        {!showSignup && (
          <Typography
            sx={{
              mb: 2,
              fontStyle: "italic",
              color: "text.secondary"
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
          onContextMenu={e => e.preventDefault()}
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "12px",
            backgroundColor: "#000"
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
            sx={{ mt: 3 }}
          >
            Create Your Account
          </Button>
        )}
      </Box>

      {/* Text Content */}
      <Box className="home-text-section" sx={{ pt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Work-Learn Project!
        </Typography>

        <Typography sx={{ mb: 2 }}>
          MOOCs – Massive Open Online Courses – promised to democratize
          education by allowing anyone with a computer and internet
          connection to learn from anywhere. Unfortunately, most people
          don’t complete MOOC classes, especially people who are not already
          highly successful. The Work-Learn Project is investigating how to
          help people stay engaged and succeed through an incentivized MOOC.
        </Typography>

        <Typography>
          With support from the National Science Foundation (Award #2100355),
          researchers from the University of Nebraska at Omaha (UNO) and
          Southern Methodist University (SMU) have partnered with
          Siena-Francis House to test the Work-Learn Project. Participants
          learn computational thinking, Python, and COBOL.
        </Typography>
      </Box>
    </Box>
  );
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Home);
