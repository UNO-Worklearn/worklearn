import {
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getUser } from "../../../redux/actions/userActions";
import Login from "../../Login/Login";

import "./ManageStudentDetails.css";

function ManageStudentDetails({ user, getUser, totalScore }) {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`, {
          withCredentials: true,
        })
        .then((res) => setCurrentUser(res.data));
      setLoading(false);
    };
    const delay = setTimeout(() => {
      fetchUser();
    }, 1500);

    return () => clearTimeout(delay);
  }, []);

  const renderScoreBar = (score, attribute, totalScore) => {
    let scoreOutOfTen = score !== -1 ? (score / totalScore) * 100 : 0;

    if (scoreOutOfTen > 100) {
      scoreOutOfTen = 100;
    }

    return (
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3} p={5}>
          <Typography>{attribute} Quiz:</Typography>
        </Grid>
        <Grid item xs={9} p={5} container alignItems="center">
          <Grid item xs={10}>
            <LinearProgress variant="determinate" value={scoreOutOfTen} />
          </Grid>
          <Grid item xs={2}>
            <Typography>
              {score !== -1 ? `${score} / ${totalScore}` : "NA"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className="student-details">
      {user ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Student Dashboard</Typography>
          </Grid>
          {loading ? (
            <Grid
              item
              xs={12}
              mt={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <CircularProgress color="error" />
            </Grid>
          ) : (
            <>
              {currentUser && (
                <>
                  <Grid item xs={12}>
                    <Typography variant="h5">
                      {currentUser?.firstName + " " + currentUser?.lastName}
                    </Typography>
                    <Typography>Email: {currentUser.email}</Typography>
                    <Typography>Role: {currentUser.role}</Typography>
                    <Typography>
                      Last Activity: {currentUser.lastActivity}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {renderScoreBar(
                      currentUser.introScore,
                      "Introduction to Computational Thinking",
                      totalScore.introScore
                    )}
                    {renderScoreBar(
                      currentUser.decompositionScore,
                      "Decomposition",
                      totalScore.decompositionScore
                    )}
                    {renderScoreBar(
                      currentUser.patternScore,
                      "Pattern Recognition",
                      totalScore.patternScore
                    )}
                    {renderScoreBar(
                      currentUser.abstractionScore,
                      "Abstraction",
                      totalScore.abstractionScore
                    )}

                    {renderScoreBar(
                      currentUser.algorithmScore,
                      "Algorithm",
                      totalScore.algorithmScore
                    )}
                    {renderScoreBar(
                      currentUser.reviewScore,
                      "Review Your Knowledge",
                      totalScore.reviewScore
                    )}
                    {renderScoreBar(
                      currentUser.pythonOneScore,
                      "Python - Lesson 1 - Intro to Python",
                      totalScore.pythonOneScore
                    )}
                    {renderScoreBar(
                      currentUser.pythonTwoScore,
                      "Python - Lesson 2 - Data Types",
                      totalScore.pythonTwoScore
                    )}
                    {renderScoreBar(
                      currentUser.pythonThreeScore,
                      "Python - Lesson 3 - Control Structures",
                      totalScore.pythonThreeScore
                    )}
                    {renderScoreBar(
                      currentUser.pythonFiveScore,
                      "Python - Lesson 5 - Strings",
                      totalScore.pythonFiveScore
                    )}
                    {renderScoreBar(
                      currentUser.pythonSixScore,
                      "Python - Lesson 6 - Lists & Dictionary",
                      totalScore.pythonSixScore
                    )}
                    {renderScoreBar(
                      currentUser.pythonSevenScore,
                      "Python - Lesson 7 - Functions",
                      totalScore.pythonSevenScore
                    )}
                    {renderScoreBar(
                      currentUser.mainframeOneScore,
                      "mainframe1 - Lesson 8 - mainframe1",
                      totalScore.mainframeOneScore
                    )} 
                    {renderScoreBar(
                      currentUser.mainframeTwoScore,
                      "mainframe1 - Lesson 9 - mainframe2",
                      totalScore.mainframeTwoScore
                    )}
                    {renderScoreBar(
                      currentUser.mainframeThreeScore,
                      "mainframe1 - Lesson 10 - mainframe3",
                      totalScore.mainframeThreeScore
                    )}
                    {renderScoreBar(
                      currentUser.mainframeFourScore,
                      "mainframe1 - Lesson 11 - mainframe4",
                      totalScore.mainframeFourScore
                    )}
                    {renderScoreBar(
                      currentUser.mainframeFiveScore,
                      "mainframe1 - Lesson 12 - mainframe5",
                      totalScore.mainframeFiveScore
                    )}
                    {renderScoreBar(
                      currentUser.mainframeSixScore,
                      "mainframe1 - Lesson 13 - mainframe6",
                      totalScore.mainframeSixScore
                    )}
                  </Grid>
                </>
              )}
            </>
          )}
        </Grid>
      ) : (
        <Login />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  totalScore: state.user.totalScore,
});

export default connect(mapStateToProps, { getUser })(ManageStudentDetails);
