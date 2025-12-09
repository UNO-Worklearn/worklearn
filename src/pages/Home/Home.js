import { Box, Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import React, { useRef, useState, useEffect } from "react";
import "./Home.css";

function Home({ user }) {
  const videoRef = useRef(null);
  const [showSignup, setShowSignup] = useState(false);

  // Prevent fast-forwarding
  useEffect(() => {
    let lastTime = 0;

    const preventSkip = () => {
      const video = videoRef.current;
      if (!video) return;

      if (video.currentTime > lastTime + 0.25) {
        video.currentTime = lastTime;
      } else {
        lastTime = video.currentTime;
      }
    };

    const vid = videoRef.current;
    if (vid) {
      vid.addEventListener("timeupdate", preventSkip);
    }

    return () => {
      if (vid) vid.removeEventListener("timeupdate", preventSkip);
    };
  }, []);

  const handleVideoEnd = () => {
    setShowSignup(true);
  };

  return (
    <Box className="home-container">

      {/* Show video ONLY when user is not logged in */}
      {!user && (
        <Box className="video-wrapper">
          <video
            ref={videoRef}
            src="/videos/Intro Program.mp4"
            autoPlay
            muted           // REQUIRED for mobile autoplay
            playsInline     // REQUIRED for iOS autoplay
            controls={false}
            onEnded={handleVideoEnd}
            onContextMenu={(e) => e.preventDefault()} // disable right-click
            className="intro-video"
          />

          {!showSignup && (
            <Typography className="watch-message">
              Please watch the full video to unlock sign up.
            </Typography>
          )}

          {showSignup && (
            <Button
              variant="contained"
              color="primary"
              href="/register"
              className="signup-button"
            >
              Create Your Account
            </Button>
          )}
        </Box>
      )}

      {/* Welcome Image */}
      <img
        src="/images/welcome.png"
        alt="Landing Page"
        className="dashboard-img"
      />

      {/* Main Page Text */}
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
