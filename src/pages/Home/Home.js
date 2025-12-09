import { Box, Typography } from "@mui/material";
import { connect } from "react-redux";

import "./Home.css";

function Home({ user }) {
  return (
    <Box sx={{ textAlign: "start", marginTop: "20px", padding: "50px" }}>
      <img
        src="/images/welcome.png"
        alt="Landing Page"
        className="dashboard-img"
      />
      <Box sx={{ padding: "50px 100px" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Work-Learn Project!
        </Typography>
        <Typography sx={{ color: "black", marginTop: "20px" }}>
          MOOCs – Massive Open Online Courses – promised to democratize
          education by allowing anyone with a computer and internet connection
          learn from anywhere. Unfortunately, most people don’t complete MOOC
          classes, especially people who are not already highly successful. The
          Work-Learn Project is investigating how to help people stay engaged
          and succeed, through an incentivized MOOC.
        </Typography>

        <Typography sx={{ color: "black", marginTop: "20px" }}>
          With support from the National Science Foundation (Award #2100355),
          researchers from the University of Nebraska at Omaha (UNO) and
          Southern Methodist University (SMU) have partnered with Siena-Francis
          House (SFH), Nebraska’s largest provider of services to individuals
          experiencing homelessness, to test the Work-Learn Project.
          Participants learn computational thinking, python, and COBOL,
          languages in high need in the Omaha IT industry.
        </Typography>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Home);
