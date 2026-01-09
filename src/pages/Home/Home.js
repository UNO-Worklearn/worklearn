import { Box, Typography, Button, IconButton } from "@mui/material";
import { VolumeUp, VolumeOff } from "@mui/icons-material";
import { connect } from "react-redux";
import React, { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";

function Home({ user }) {
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [muted, setMuted] = useState(true);

  // iOS detection (Safari + Chrome on iOS)
  const isIOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  // -----------------------------------------
  // Redirect if logged in
  // -----------------------------------------
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // -----------------------------------------
  // Desktop play handler
  // -----------------------------------------
  const handleDesktopPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    setMuted(false);
    video.play().catch(() => {});
  };

  // -----------------------------------------
  // iOS tap-to-play handler (REQUIRED)
  // -----------------------------------------
  const handleIOSPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    setMuted(false);
    video.play().catch(() => {});
  };

  // -----------------------------------------
  // Desktop volume toggle
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
      {/* VIDEO SECTION */}
      <Box
        className="video-wrapper"
        sx={{ position: "relative", textAlign: "center" }}
      >
        {!showSignup && (
          <Typography
            className="watch-message"
            sx={{ mb: 1, fontStyle: "italic" }}
          >
            Please watch the full video to unlock sign up.
          </Typography>
        )}

        {/* VIDEO */}
        <video
          ref={videoRef}
          playsInline
          muted
          preload="auto"
          controls={isIOS}   // iOS MUST use native controls
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

        {/* DESKTOP PLAY OVERLAY */}
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
              onClick={handleDesktopPlay}
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

        {/* iOS TAP-TO-PLAY OVERLAY */}
        {!started && isIOS && (
          <Box
            onClick={handleIOSPlay}
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.35)",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                fontSize: "18px",
                padding: "12px 28px",
                borderRadius: "999px",
              }}
            >
              ▶ Tap to Play
            </Button>
          </Box>
        )}

        {/* DESKTOP VOLUME TOGGLE */}
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

      {/* TEXT CONTENT */}
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
