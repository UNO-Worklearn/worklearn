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

import "./StudentDetails.css";

function StudentDetails({ user, getUser, totalScore }) {
  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`,
          { withCredentials: true }
        );
        setCurrentUser(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchUser, 1500);
    return () => clearTimeout(delay);
  }, [userId]);

  /* ----------------------------------------
     Helpers
  ---------------------------------------- */

  const getProgressColor = (percent) => {
    if (percent >= 100) return "#2e7d32"; // green
    if (percent >= 75) return "#0288d1";  // blue
    if (percent >= 50) return "#ed6c02";  // orange
    return "#d32f2f";                     // red
  };

  const calculateOverallProgress = () => {
    if (!currentUser || !totalScore) {
      return { percent: 0, completed: 0, total: 0 };
    }

    const scorePairs = [
      "introScore",
      "decompositionScore",
      "patternScore",
      "abstractionScore",
      "algorithmScore",
      "reviewScore",
      "pythonOneScore",
      "pythonTwoScore",
      "pythonThreeScore",
      "pythonFiveScore",
      "pythonSixScore",
      "pythonSevenScore",
      "mainframeOneScore",
      "mainframeTwoScore",
      "mainframeThreeScore",
      "mainframeFourScore",
      "mainframeFiveScore",
      "mainframeSixScore",
    ];

    let completed = 0;
    let total = 0;

    scorePairs.forEach((key) => {
      const score = currentUser[key];
      const max = totalScore[key];

      if (score !== -1 && score != null && max != null) {
        completed += score;
        total += max;
      }
    });

    const percent = total ? Math.round((completed / total) * 100) : 0;
    return { percent, completed, total };
  };

  const renderScoreBar = (score, label, maxScore) => {
    const percent =
      score !== -1 && maxScore ? Math.min((score / maxScore) * 100, 100) : 0;

    return (
      <Grid container spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2">{label} Quiz</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <LinearProgress
            variant="determinate"
            value={percent}
            sx={{
              height: 8,
              borderRadius: 4,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography
            variant="body2"
            sx={{ textAlign: { xs: "left", sm: "right" } }}
          >
            {score !== -1 ? `${score} / ${maxScore}` : "NA"}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  /* ----------------------------------------
     Render
  ---------------------------------------- */

  if (!user) return <Login />;

  return (
    <div className="student-details">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Course Progress</Typography>
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
          currentUser && (
            <>
              {/* OVERALL PROGRESS */}
              <Grid item xs={12} mb={4}>
                {(() => {
                  const { percent, completed, total } =
                    calculateOverallProgress();
                  const barColor = getProgressColor(percent);

                  return (
                    <>
                      <Typography variant="h6" gutterBottom>
                        Overall Progress
                      </Typography>

                      <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} sm={10}>
                          <LinearProgress
                            variant="determinate"
                            value={percent}
                            sx={{
                              height: 12,
                              borderRadius: 6,
                              backgroundColor: "#e0e0e0",
                              "& .MuiLinearProgress-bar": {
                                backgroundColor: barColor,
                                borderRadius: 6,
                              },
                            }}
                          />
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sm={2}
                          sx={{
                            textAlign: { xs: "left", sm: "right" },
                          }}
                        >
                          <Typography variant="body2" fontWeight={500}>
                            {completed} / {total} ({percent}%)
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  );
                })()}
              </Grid>

              {/* INDIVIDUAL QUIZZES */}
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
                  "Python – Lesson 1",
                  totalScore.pythonOneScore
                )}
                {renderScoreBar(
                  currentUser.pythonTwoScore,
                  "Python – Lesson 2",
                  totalScore.pythonTwoScore
                )}
                {renderScoreBar(
                  currentUser.pythonThreeScore,
                  "Python – Lesson 3",
                  totalScore.pythonThreeScore
                )}
                {renderScoreBar(
                  currentUser.pythonFiveScore,
                  "Python – Lesson 5",
                  totalScore.pythonFiveScore
                )}
                {renderScoreBar(
                  currentUser.pythonSixScore,
                  "Python – Lesson 6",
                  totalScore.pythonSixScore
                )}
                {renderScoreBar(
                  currentUser.pythonSevenScore,
                  "Python – Lesson 7",
                  totalScore.pythonSevenScore
                )}
                {renderScoreBar(
                  currentUser.mainframeOneScore,
                  "Mainframe – Lesson 8",
                  totalScore.mainframeOneScore
                )}
                {renderScoreBar(
                  currentUser.mainframeTwoScore,
                  "Mainframe – Lesson 9",
                  totalScore.mainframeTwoScore
                )}
                {renderScoreBar(
                  currentUser.mainframeThreeScore,
                  "Mainframe – Lesson 10",
                  totalScore.mainframeThreeScore
                )}
                {renderScoreBar(
                  currentUser.mainframeFourScore,
                  "Mainframe – Lesson 11",
                  totalScore.mainframeFourScore
                )}
                {renderScoreBar(
                  currentUser.mainframeFiveScore,
                  "Mainframe – Lesson 12",
                  totalScore.mainframeFiveScore
                )}
                {renderScoreBar(
                  currentUser.mainframeSixScore,
                  "Mainframe – Lesson 13",
                  totalScore.mainframeSixScore
                )}
              </Grid>
            </>
          )
        )}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  totalScore: state.user.totalScore,
});

export default connect(mapStateToProps, { getUser })(StudentDetails);
