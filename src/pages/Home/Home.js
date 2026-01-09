import { Box, Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import React, { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";

function Home({ user }) {
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // -----------------------------------------
  // Prevent fast-forwarding (safe version)
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

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
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

        {/* Video */}
        <video
          ref={videoRef}
          playsInline
          muted
          preload="auto"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          poster="https://uno-worklearn.s3.us-east-2.amazonaws.com/worklearn-videos/worklearn-videos%3AIntroWorklearn-poster.PNG"
          onPlay={() => setStarted(true)}
          onEnded={handleVideoEnd}
          onContextMenu={(e) => e.preventDefault()}
          className="intro-video"
        >
          <source
            src="https://uno-worklearn.s3.us-east-2.amazonaws.com/worklearn-videos/IntroWorklearn.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play Overlay */}
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

        {/* Signup Button */}
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
          MOOCs – Massive Open Online Courses – promised to democratize education
          by allowing anyone with a computer and internet connection learn from
          anywhere. Unfortunately, most people don’t complete MOOC classes,
          especially people who are not already highly successful. The
          Work-Learn Project is investigating how to help people stay engaged
          and succeed, through an incentivized MOOC.
        </Typography>

        <Typography className="home-paragraph">
          With support from the National Science Foundation (Award #2100355),
          researchers from the University of Nebraska at Omaha (UNO) and
          Southern Methodist University (SMU) have partnered with Siena-Francis
          House to test the Work-Learn Project. Participants learn computational
          thinking, Python, and COBOL.
        </Typography>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Home);
