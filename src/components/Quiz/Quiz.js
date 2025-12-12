/**
 * - Updates user quiz score (optional)
 * - Removes old broken PUT /api/users/quiz route
 */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

import {
  fetchQuestionsSuccess,
  selectAnswer,
} from "../../redux/actions/quizActions";

import { updateQuizScore } from "../../redux/actions/userActions";
import Notification from "../SnackBar/SnackBar";

import "./Quiz.css";
import axios from "axios";
import { useParams } from "react-router";

const Quiz = ({
  type,
  questions,
  correctAnswers,
  fetchQuestionsSuccess,
  selectAnswer,
  updateQuizScore,
}) => {
  const [newQuestions, setNewQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [userResponsesMC, setUserResponsesMC] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(true);

  const { id, topicId, contentId } = useParams();

  /** Track start time */
  const [startTime] = useState(Date.now());

  /** Map quiz type to scoring field */
  const typeToField = {
    decomposition: "decompositionScore",
    "pattern-recognition": "patternScore",
    abstraction: "abstractionScore",
    algorithms: "algorithmScore",
    intro: "introScore",
    review: "reviewScore",
    email: "emailScore",
    beyond: "beyondScore",
    python1: "pythonOneScore",
    python2: "pythonTwoScore",
    python3: "pythonThreeScore",
    python5: "pythonFiveScore",
    python6: "pythonSixScore",
    python7: "pythonSevenScore",
    mainframe1: "mainframeOneScore",
    mainframe2: "mainframeTwoScore",
    mainframe3: "mainframeThreeScore",
    mainframe4: "mainframeFourScore",
    mainframe5: "mainframeFiveScore",
    mainframe6: "mainframeSixScore",
    cobol2: "cobolTwoScore",
    cobol3: "cobolThreeScore",
    cobol4: "cobolFourScore",
    cobol6: "cobolSixScore",
  };

  /** Load questions */
  useEffect(() => {
    const loadQuestions = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/questions`,
        { credentials: "include" }
      );
      const data = await res.json();

      const filtered = data.filter((q) => q.type === type);

      setNewQuestions(filtered);
      setSelectedOptions(Array(filtered.length).fill(null));
      setUserResponsesMC(
        filtered.map((q) =>
          Array.isArray(q.correctAnswer) ? [] : null
        )
      );
    };

    setSubmitted(false);
    setScore(0);
    loadQuestions();
  }, [id, topicId, contentId, type]);

  /** Push to Redux */
  useEffect(() => {
    fetchQuestionsSuccess(newQuestions);
  }, [newQuestions, fetchQuestionsSuccess]);

  /** Handle single-choice selection */
  const handleOptionClick = (qIndex, optIndex) => {
    const updated = [...selectedOptions];
    updated[qIndex] = optIndex;
    setSelectedOptions(updated);
    selectAnswer(qIndex, optIndex);
  };

  /** Handle multi-choice checkbox */
  const handleCheckboxChange = (e, qIndex, optIndex) => {
    const updated = [...userResponsesMC];

    if (e.target.checked) updated[qIndex].push(optIndex);
    else updated[qIndex] = updated[qIndex].filter((x) => x !== optIndex);

    const updatedSelected = [...selectedOptions];
    updatedSelected[qIndex] = updated[qIndex];

    setUserResponsesMC(updated);
    setSelectedOptions(updatedSelected);

    selectAnswer(qIndex, updated[qIndex]);
  };

  /** Background highlight logic */
  const handleBackground = (qIndex, optIndex) => {
    if (!submitted) {
      return selectedOptions[qIndex]?.includes?.(optIndex) ||
        selectedOptions[qIndex] === optIndex
        ? "#419aff"
        : "#fff";
    }

    const correct = correctAnswers[qIndex];
    const isCorrect = Array.isArray(correct)
      ? correct.includes(optIndex)
      : correct === optIndex;

    const isSelected = Array.isArray(selectedOptions[qIndex])
      ? selectedOptions[qIndex].includes(optIndex)
      : selectedOptions[qIndex] === optIndex;

    if (isCorrect) return "#00e348";
    if (isSelected && !isCorrect) return "#ff4141";
    return "#ddd";
  };

  /** SUBMIT QUIZ */
  const handleSubmit = async () => {
    let rawScore = 0;

    selectedOptions.forEach((resp, i) => {
      const correct = correctAnswers[i];

      if (!Array.isArray(correct)) {
        if (resp === correct) rawScore++;
      } else {
        const sortedUser = [...resp].sort();
        const sortedCorrect = [...correct].sort();

        if (
          sortedUser.length === sortedCorrect.length &&
          sortedUser.every((v, idx) => v === sortedCorrect[idx])
        ) {
          rawScore++;
        }
      }
    });

    setScore(rawScore);
    setSubmitted(true);

    const percent = (rawScore / questions.length) * 100;
    const timeSpent = Math.round((Date.now() - startTime) / 1000);

    /** OPTIONAL: update student's cumulative score */
    const scoreField = typeToField[type];
    if (scoreField) {
      updateQuizScore(percent, scoreField); // Redux → will update backend separately
    }

    /** Log quiz attempt */
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/activity/quiz`,
        {
          user_id: localStorage.getItem("userID"),
          type,
          score: percent,
          timeSpent,
        },
        { withCredentials: true }
      );

      console.log("Quiz activity logged ✔");
    } catch (err) {
      console.error("Quiz activity FAILED:", err);
    }
  };

  return (
    <Box className="quiz-container" sx={{ margin: "30px", padding: "30px" }}>
      <Alert severity="warning">
        Please refresh the page if the quiz does not load.
      </Alert>

      {questions.length > 0 ? (
        questions.map((question, qIndex) => (
          <Box key={qIndex} sx={{ marginBottom: "20px" }}>
            <h6
              style={{ fontWeight: "600" }}
              dangerouslySetInnerHTML={{ __html: question.question }}
            />

            {question.imgURL && (
              <img className="img-url" src={question.imgURL} alt="question" />
            )}

            <List>
              {!Array.isArray(question.correctAnswer)
                ? /** --- SINGLE-CHOICE --- */
                  question.options.map((opt, optIndex) => (
                    <ListItem key={optIndex} disablePadding>
                      <ListItemButton
                        onClick={() =>
                          !submitted && handleOptionClick(qIndex, optIndex)
                        }
                        sx={{
                          backgroundColor: handleBackground(qIndex, optIndex),
                          borderRadius: "8px",
                          marginBottom: "8px",
                          border: "1px solid #000",
                        }}
                      >
                        <div dangerouslySetInnerHTML={{ __html: opt }} />
                      </ListItemButton>
                    </ListItem>
                  ))
                : /** --- MULTIPLE-CHOICE --- */
                  question.options.map((opt, optIndex) => (
                    <ListItem key={optIndex} disablePadding>
                      <FormControlLabel
                        sx={{
                          backgroundColor: handleBackground(qIndex, optIndex),
                          borderRadius: "8px",
                          marginBottom: "8px",
                          border: "1px solid #000",
                          width: "100%",
                        }}
                        control={
                          <Checkbox
                            disabled={submitted}
                            onChange={(e) =>
                              handleCheckboxChange(e, qIndex, optIndex)
                            }
                          />
                        }
                        label={
                          <div dangerouslySetInnerHTML={{ __html: opt }} />
                        }
                      />
                    </ListItem>
                  ))}
            </List>
          </Box>
        ))
      ) : (
        <Grid container justifyContent="center" mt={5}>
          <CircularProgress color="error" />
        </Grid>
      )}

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={submitted}
        sx={{ marginTop: "20px" }}
      >
        Submit Quiz
      </Button>

      {submitted && (
        <>
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            Your Score: {score} / {questions.length}
          </Typography>

          <Notification
            open={notificationOpen}
            handleClose={() => setNotificationOpen(false)}
            message={`Score: ${((score / questions.length) * 100).toFixed(2)}%`}
            severity="success"
          />
        </>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  questions: state.quiz.questions,
  correctAnswers: state.quiz.correctAnswers,
});

export default connect(mapStateToProps, {
  fetchQuestionsSuccess,
  selectAnswer,
  updateQuizScore,
})(Quiz);
