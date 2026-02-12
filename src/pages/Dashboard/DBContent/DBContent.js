import { Box, Typography } from "@mui/material";

function DBContent() {
  return (
    <Box
      sx={{
        textAlign: "left",
        mt: 3,
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 2, sm: 4 },
        maxWidth: "100%",
      }}
    >
      {/* VIDEO */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 720,
          mx: "auto",
        }}
      >
        <video
          playsInline
          preload="metadata"
          controls
          poster="https://work-learn-bucket.s3.us-east-1.amazonaws.com/IntroWorklearn-poster.PNG"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "8px",
          }}
        >
          <source
            src="https://work-learn-bucket.s3.us-east-1.amazonaws.com/IntroWorklearn.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* TITLE */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mt: 5, fontWeight: 600 }}
      >
        Welcome to the Work-Learn!
      </Typography>

      {/* TEXT */}
      <Typography sx={{ color: "black", mt: 2 }}>
        MOOCs – Massive Open Online Courses – promised to democratize education
        by allowing anyone with a computer and internet connection to learn from
        anywhere. Unfortunately, most people don’t complete MOOC classes,
        especially people who are not already highly successful. The Work-Learn
        Project is investigating how to help people stay engaged and succeed
        through an incentivized MOOC.
      </Typography>

      <Typography sx={{ color: "black", mt: 2 }}>
        With support from the National Science Foundation (Award #2100355),
        researchers from the University of Nebraska at Omaha (UNO) and Southern
        Methodist University (SMU) have partnered with Siena-Francis House (SFH),
        Nebraska’s largest provider of services to individuals experiencing
        homelessness, to test the Work-Learn Project. Participants learn
        computational thinking, Python, and COBOL — languages in high demand in
        the Omaha IT industry.
      </Typography>
    </Box>
  );
}

export default DBContent;
