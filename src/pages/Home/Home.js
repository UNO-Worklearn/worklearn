import { Box, Typography, Button, IconButton } from "@mui/material";
import { VolumeUp, VolumeOff } from "@mui/icons-material";
import { connect } from "react-redux";
import React, { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";

function Home({ user }) {
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [muted, setMuted] = useState(true);

  // ✅ iOS detection (Safari + Chrome on iOS)
  const isIOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  // -----------------------------------------
  // Prevent fast-forwarding (desktop only)
  // -----------------------------------------
  useEffect(() => {
    if (isIOS) return; // ❌ iOS breaks with this logic

    const video = videoRef.current;
    if (!video) return;

    let lastAllowedTime = 0;

    const onTimeUpdate = () => {
      if (!video.seeking) {
        lastAllowedTime = video.currentTime;
      }
    };

    const onSeeking = () => {
      if (video.currentTime > lastAllowedTime + 0.3) {
        video.currentTime = lastAllowedTime;
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("seeking", onSeeking);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("seeking", onSeeking);
    };
  }, [isIOS]);

  // -----------------------------------------
  // Redirect AFTER hooks
  // -----------------------------------------
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // -----------------------------------------
  // Desktop play handler (NOT used on iOS)
  // -----------------------------------------
  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    setMuted(false);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  // -----------------------------------------
  // Volume toggle (desktop only)
  // -----------------------------------------
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const handleVideoEnd = () => {
    setShowSignup(true);
  };

  return (
    <Box className="home-container">
      {/* Video section */}
      <Box className="video-wrapper">
        {!showSignup && (
          <Typography
            className="watch-message"
            sx={{ mb: 1, fontStyle: "italic", textAlign: "center" }}
          >
            Please watch the full video to unlock sign up.
          </Typography>
        )}

        {/* VIDEO */}
        <video
          ref={videoRef}
          playsInline
          muted
          preload="metadata"

          /* 🚨 THIS IS THE KEY FIX */
          controls={isIOS}        // ✅ native controls on iOS
          
          poster="https://uno-worklearn.s3.us-east-2.amazonaws.com/worklearn-videos/worklearn-videos%3AIntroWorklearn-poster.PNG"
          onPlay={() => setStarted(true)}
          onEnded={handleVideoEnd}
          className="intro-video"
        >
          <source
            src="https://uno-worklearn.s3.us-east-2.amazonaws.com/worklearn-videos/IntroWorklearn.mp4"
            type="video/mp4"
          />
        </video>

        {/* CUSTOM PLAY OVERLAY (DESKTOP ONLY) */}
        {!started && !isIOS && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.35)",
              borderRadius: "12px",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handlePlayClick}
              sx={{
                fontSize: "18px",
                padding: "12px 28px",
                borderRadius: "999px",
              }}
            >
              ▶ Play Video
            </Button>
          </Box>
        )}

        {/* VOLUME TOGGLE (DESKTOP ONLY) */}
        {started && !isIOS && (
          <IconButton
            onClick={toggleMute}
            sx={{
              position: "absolute",
              bottom: 12,
              right: 12,
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
            }}
          >
            {muted ? <VolumeOff /> : <VolumeUp />}
          </IconButton>
        )}

        {/* SIGNUP BUTTON */}
        {showSignup && (
          <Button
            variant="contained"
            color="primary"
            href="/register"
            className="signup-button"
            sx={{ mt: 3 }}
          >
            Create Your Account
          </Button>
        )}
      </Box>

      {/* Text content */}
      <Box className="home-text-section">
        <Typography variant="h4" gutterBottom className="home-title">
          Welcome to the Work-Learn Project!
        </Typography>

        <Typography className="home-paragraph">
          MOOCs – Massive Open Online Courses – promised to democratize
          education by allowing anyone with a computer and internet connection
          learn from anywhere. Unfortunately, most people don’t complete MOOC
          classes, especially people who are not already highly successful.
          The Work-Learn Project is investigating how to help people stay
          engaged and succeed, through an incentivized MOOC.
        </Typography>

        <Typography className="home-paragraph">
          With support from the National Science Foundation (Award #2100355),
          researchers from the University of Nebraska at Omaha (UNO) and
          Southern Methodist University (SMU) have partnered with Siena-Francis
          House to test the Work-Learn Project. Participants learn
          computational thinking, Python, and COBOL.
        </Typography>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Home);
