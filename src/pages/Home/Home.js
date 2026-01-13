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

  // -----------------------------------------
  // Prevent fast-forwarding (safe)
  // -----------------------------------------
  useEffect(() => {
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
  }, []);

  // -----------------------------------------
  // Redirect AFTER hooks
  // -----------------------------------------
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // -----------------------------------------
  // Mobile-safe play handler + fullscreen
  // -----------------------------------------
  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.playsInline = true;
    setMuted(false);

    // iOS fullscreen fallback
    if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => {});
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        setMuted(true);
        video.play();
      });
    }
  };

  // -----------------------------------------
  // Volume toggle
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
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          poster="https://work-learn-bucket.s3.us-east-1.amazonaws.com/IntroWorklearn-poster.PNG"
          onPlay={() => setStarted(true)}
          onEnded={handleVideoEnd}
          onContextMenu={(e) => e.preventDefault()}
          className="intro-video"
        >
          <source
            src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/IntroWorklearn.mp4"
            type="video/mp4"
          />
        </video>

        {/* PLAY OVERLAY */}
        {!started && (
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

        {/* VOLUME TOGGLE */}
        {started && (
          <IconButton
            onClick={toggleMute}
            sx={{
              position: "absolute",
              bottom: 12,
              right: 12,
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.8)",
              },
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
