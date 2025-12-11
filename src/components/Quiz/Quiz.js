/**
 *  @author: Phillip Nguyen
 *  Component: Quiz
 *  Date: 11/15/2023
 *  Objective: Building a quiz feature for students to complete quizzes on our own application
 *
 */
/**
 *  Quiz Component (Updated)
 *  Tracks quiz attempts, scores, time spent, and logs quiz activity
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
  userResponses,
  fetchQuestionsSuccess,
  selectAnswer,
  updateQuizScore,
  quizScore,
}) => {
  const [newQuestions, setNewQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsMC, setSelectedOptionsMC] = useState([]);
  const [userResponsesMC, setUserResponsesMC] = useState([]);

  const [score, setScore] = useState(0);
  const [quizType, setQuizType] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(true);

  const { id, topicId, contentId } = useParams();

  /** 🔹 Track when quiz started */
  const [startTime] = useState(Date.now());

  /** 🔹 Send score to existing `/api/users/quiz` route (updates *_Score fields) */
  useEffect(() => {
    if (!submitted || score <= 0) return;

    const sendScore = async () => {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/quiz`,
        {
          quizScore,
          type,
          user_id: localStorage.getItem("userID"),
        },
        { withCredentials: true }
      );
    };

    sendScore();
  }, [submitted, score, quizScore, type]);

  /** 🔹 Map quiz type to database field */
  useEffect(() => {
    const typeMap = {
      "decomposition": "decompositionScore",
      "pattern-recognition": "patternScore",
      "abstraction": "abstractionScore",
      "algorithms": "algorithmScore",
      "intro": "introScore",
      "review": "reviewScore",
      "email": "emailScore",
      "beyond": "beyondScore",
      "python1": "pythonOneScore",
      "python2": "pythonTwoScore",
      "python3": "pythonThreeScore",
      "python5": "pythonFiveScore",
      "python6": "pythonSixScore",
      "python7": "pythonSevenScore",
      "mainframe1": "mainframeOneScore",
      "mainframe2": "mainframeTwoScore",
      "mainframe3": "mainframeThreeScore",
      "mainframe4": "mainframeFourScore",
      "mainframe5": "mainframeFiveScore",
      "mainframe6": "mainframeSixScore",
      "cobol2": "cobolTwoScore",
      "cobol3": "cobolThreeScore",
      "cobol4": "cobolFourScore",
      "cobol6": "cobolSixScore",
    };

    setQuizType(typeMap[type]);

    if (score > 0 && typeMap[type]) {
      updateQuizScore(score, typeMap[type]);
    }
  }, [type, score, updateQuizScore]);

  /** 🔹 Load questions */
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/questions`,
        { credentials: "include" }
      );
      const data = await response.json();

      const filtered = data.filter((q) => q.type === type);
      setNewQuestions(filtered);
      setSelectedOptions(Array(filtered.length).fill(null));
      setSelectedOptionsMC(Array(filtered.length).fill([]));
    };

    setSubmitted(false);
    setScore(0);
    fetchQuestions();
  }, [id, topicId, contentId, type]);

  /** 🔹 Prepare MC response arrays */
  useEffect(() => {
    const mcInit = correctAnswers.map((ans) =>
      Array.isArray(ans) ? [] : null
    );
    setUserResponsesMC(mcInit);
  }, [correctAnswers]);

  /** 🔹 Push questions into Redux */
  useEffect(() => {
    fetchQuestionsSuccess(newQuestions);
  }, [newQuestions, fetchQuestionsSuccess]);

  /** 🔹 Handle single-choice selection */
  const handleOptionClick = (qIndex, optionIndex) => {
    const updated = [...selectedOptions];
    updated[qIndex] = optionIndex;

    setSelectedOptions(updated);
    selectAnswer(qIndex, optionIndex);
  };

  /** 🔹 Handle multi-choice selection */
  const handleCheckboxChange = (event, qIndex, optionIndex) => {
    const updated = [...userResponsesMC];

    if (event.target.checked) {
      updated[qIndex].push(optionIndex);
    } else {
      updated[qIndex] = updated[qIndex].filter((x) => x !== optionIndex);
    }

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[qIndex] = updated[qIndex];

    setUserResponsesMC(updated);
    setSelectedOptions(updatedSelectedOptions);
    selectAnswer(qIndex, updated[qIndex]);
  };

  /** 🔹 Compute background colors */
  const handleBackgroundColor = (qIndex, optIndex) => {
    if (!submitted) {
      return selectedOptions[qIndex] === optIndex ? "#419aff" : "#ffffff";
    }

    const isCorrect = Array.isArray(correctAnswers[qIndex])
      ? correctAnswers[qIndex].includes(optIndex)
      : correctAnswers[qIndex] === optIndex;

    const isSelected = Array.isArray(selectedOptions[qIndex])
      ? selectedOptions[qIndex].includes(optIndex)
      : selectedOptions[qIndex] === optIndex;

    if (isCorrect) return "#00e348"; // green correct
    if (isSelected && !isCorrect) return "#ff4141"; // red wrong

    return "#dddddd";
  };

  /** 🔥 SUBMIT QUIZ (score + activity log) */
  const handleSubmit = async () => {
    let newScore = 0;

    selectedOptions.forEach((response, i) => {
      if (!Array.isArray(response)) {
        if (response === correctAnswers[i]) newScore++;
      } else {
        const sortedUser = [...response].sort();
        const sortedCorrect = [...correctAnswers[i]].sort();
        if (
          sortedUser.length === sortedCorrect.length &&
          sortedUser.every((v, idx) => v === sortedCorrect[idx])
        ) {
          newScore++;
        }
      }

      // Update question statistics
      setTimeout(async () => {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/questions`,
          {
            _id: questions[i]._id,
            rightOrWrong:
              JSON.stringify(response) === JSON.stringify(correctAnswers[i]),
          },
          { withCredentials: true }
        );
      }, 3000);
    });

    setScore(newScore);
    setSubmitted(true);

    /** 🔥 Log activity */
    try {
      const percent = (newScore / questions.length) * 100;
      const timeSpent = Math.round((Date.now() - startTime) / 1000);

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
      console.error("Activity log failed:", err);
    }
  };

  return (
    <Box className="quiz-container" sx={{ margin: "30px", padding: "30px" }}>
      <Alert severity="warning">Please refresh the page if the quiz does not load.</Alert>

      {questions.length > 0 ? (
        questions.map((question, index) => (
          <Box key={index} sx={{ marginBottom: "20px" }}>
            <h6
              style={{ fontWeight: "600" }}
              dangerouslySetInnerHTML={{ __html: question.question }}
            />

            {question.imgURL && (
              <img className="img-url" src={question.imgURL} alt="question" />
            )}

            <List>
              {!Array.isArray(question.correctAnswer)
                ? /** SINGLE CHOICE */
                  question.options.map((opt, optIndex) => (
                    <ListItem key={optIndex} disablePadding>
                      <ListItemButton
                        onClick={() => handleOptionClick(index, optIndex)}
                        sx={{
                          backgroundColor: handleBackgroundColor(index, optIndex),
                          borderRadius: "8px",
                          marginBottom: "8px",
                          border: "1px solid #000",
                        }}
                      >
                        <div dangerouslySetInnerHTML={{ __html: opt }} />
                      </ListItemButton>
                    </ListItem>
                  ))
                : /** MULTIPLE CHOICE */
                  question.options.map((opt, optIndex) => (
                    <ListItem key={optIndex} disablePadding>
                      <FormControlLabel
                        sx={{
                          backgroundColor: handleBackgroundColor(index, optIndex),
                          borderRadius: "8px",
                          marginBottom: "8px",
                          border: "1px solid #000",
                          width: "100%",
                        }}
                        control={
                          <Checkbox
                            onChange={(e) =>
                              handleCheckboxChange(e, index, optIndex)
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
  userResponses: state.quiz.userResponses,
  correctAnswers: state.quiz.correctAnswers,
  quizScore: state.user.quizScore,
});

export default connect(mapStateToProps, {
  fetchQuestionsSuccess,
  selectAnswer,
  updateQuizScore,
})(Quiz);
