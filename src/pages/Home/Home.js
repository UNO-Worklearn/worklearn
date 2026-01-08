import { Box, Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import React, { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Home.css";

function Home({ user }) {
  const videoRef = useRef(null);
  const [showSignup, setShowSignup] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // -----------------------------------------
  // 🔒 STRONG seek / fast-forward prevention
  // -----------------------------------------
  useEffect(() => {
    let maxTime = 0;

    const onTimeUpdate = () => {
      const v = videoRef.current;
      if (!v || v.seeking) return;
      maxTime = Math.max(maxTime, v.currentTime);
    };

    const onSeeking = () => {
      const v = videoRef.current;
      if (!v) return;
      if (v.currentTime > maxTime + 0.1) {
        v.currentTime = maxTime;
      }
    };

    const v = videoRef.current;
    if (v) {
      v.addEventListener("timeupdate", onTimeUpdate);
      v.addEventListener("seeking", onSeeking);
    }

    return () => {
      if (v) {
        v.removeEventListener("timeupdate", onTimeUpdate);
        v.removeEventListener("seeking", onSeeking);
      }
    };
  }, []);

  // -----------------------------------------
  // Redirect AFTER hooks
  // -----------------------------------------
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleVideoEnd = () => {
    setShowSignup(true);
  };

  return (
    <Box className="home-container">

      {/* Video section */}
      <Box className="video-wrapper" style={{ textAlign: "center" }}>

        {!showSignup && (
          <Typography
            className="watch-message"
            style={{ marginBottom: "10px", fontStyle: "italic" }}
          >
            Please watch the full video to unlock sign up.
          </Typography>
        )}

        <video
          ref={videoRef}
          preload="auto"
          playsInline
          muted
          autoPlay
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          crossOrigin="anonymous"
          onLoadedData={() => setVideoReady(true)}
          onEnded={handleVideoEnd}
          onContextMenu={(e) => e.preventDefault()}
          className={`intro-video ${videoReady ? "show" : ""}`}
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "12px"
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
            className="signup-button"
            style={{ marginTop: "20px" }}
          >
            Create Your Account
          </Button>
        )}
      </Box>

      {/* Text content */}
      <Box className="home-text-section" style={{ paddingTop: "40px" }}>
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
