/**
 *  @author: Phillip Nguyen
 *  Component: Quiz
 *  Date: 11/15/2023
 *  Objective: Building a quiz feature for students to complete quizzes on our own application
 *
 */
/**
 * Quiz Component – Updated with Activity Logging
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
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [questionIndex, setQuestionIndex] = useState(null);
  const [selectedOptionsMC, setSelectedOptionsMC] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [userResponsesMC, setUserResponsesMC] = useState([]);
  const [score, setScore] = useState(0);
  const [quizType, setQuizType] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(true);

  const { id, topicId, contentId } = useParams();

  // Track time spent on quiz
  const [startTime] = useState(Date.now());

  // Send quiz score to backend userScores table
  useEffect(() => {
    const updateQuizScoreState = async () => {
      if (score > 0) {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/quiz`,
          {
            quizScore,
            type,
            user_id: localStorage.getItem("userID"),
          },
          { withCredentials: true }
        );
      }
    };
    if (submitted) updateQuizScoreState();
  }, [submitted, quizScore, type]);


  // Determine which quiz score field to update
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

    if (score > 0 && quizType) {
      updateQuizScore(score, quizType);
    }
  }, [type, score, quizType]);


  // Fetch questions from backend
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/questions`,
        { credentials: "include" }
      );
      const data = await response.json();

      const filteredData = data.filter(q => q.type === type);
      setNewQuestions(filteredData);
      setSelectedOptions(Array(filteredData.length).fill(null));
    };

    setSubmitted(false);
    setScore(0);
    fetchQuestions();
  }, [id, topicId, contentId, type]);


  // For multi-select questions
  useEffect(() => {
    const mc = correctAnswers.map(v => Array.isArray(v) ? [] : null);
    setUserResponsesMC(mc);
  }, [correctAnswers, type]);


  useEffect(() => {
    fetchQuestionsSuccess(newQuestions);
  }, [newQuestions]);


  // Submit Quiz
  const handleSubmit = async () => {
    let newScore = 0;

    selectedOptions.forEach((response, index) => {
      let correct = false;

      if (Array.isArray(response)) {
        const sortedUser = [...response].sort();
        const sortedCorrect = [...correctAnswers[index]].sort();
        correct = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
      } else {
        correct = response === correctAnswers[index];
      }

      if (correct) newScore++;

      // Update question analytics
      setTimeout(async () => {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/questions`,
          {
            _id: questions[index]._id,
            rightOrWrong: correct,
          },
          { withCredentials: true }
        );
      }, 1000);
    });

    setScore(newScore);
    setSubmitted(true);

    // ---------------------------
    //  NEW PART: SEND ACTIVITY LOG
    // ---------------------------
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // seconds

    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/activity/quiz`,
      {
        user_id: localStorage.getItem("userID"),
        type,
        score: Math.round((newScore / questions.length) * 100),
        timeSpent,
      },
      { withCredentials: true }
    );

    console.log("QUIZ ACTIVITY LOG SENT ✔");
  };


  const handleBackgroundColor = (index, optionIndex) => {
    if (!submitted) {
      return selectedOptions[index] === optionIndex ? "#419aff" : "#ffffff";
    }

    const correct = correctAnswers[index];

    if (Array.isArray(correct)) {
      return correct.includes(optionIndex) ? "#00e348" : "#ff4141";
    }

    return optionIndex === correct ? "#00e348" : "#ff4141";
  };


  return (
    <Box className="quiz-container" sx={{ margin: "30px", padding: "30px" }}>
      <Alert severity="warning">Please refresh if quiz does not load.</Alert>

      {questions.length > 0 ? (
        questions.map((question, index) => (
          <Box key={index} sx={{ marginBottom: "20px" }}>
            <Box sx={{ marginBottom: "10px" }}>
              <h6
                style={{ fontWeight: "600" }}
                dangerouslySetInnerHTML={{ __html: question.question }}
              />
            </Box>

            {question.imgURL && (
              <img className="img-url" src={question.imgURL} alt={question.question} />
            )}

            <List>
              {!Array.isArray(correctAnswers[index])
                ? question.options?.map((option, optionIndex) => (
                    <ListItem key={optionIndex} disablePadding>
                      <ListItemButton
                        onClick={() =>
                          setSelectedOptions((prev) => {
                            const updated = [...prev];
                            updated[index] = optionIndex;
                            return updated;
                          })
                        }
                        sx={{
                          backgroundColor: handleBackgroundColor(
                            index,
                            optionIndex
                          ),
                          borderRadius: "8px",
                          marginBottom: "8px",
                          border: "1px solid black",
                        }}
                      >
                        <div dangerouslySetInnerHTML={{ __html: option }} />
                      </ListItemButton>
                    </ListItem>
                  ))
                : question.options?.map((option, optionIndex) => (
                    <ListItem key={optionIndex} disablePadding>
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e) => {
                              const checked = e.target.checked;
                              setSelectedOptions((prev) => {
                                const arr = [...prev];
                                const existing = arr[index] || [];
                                arr[index] = checked
                                  ? [...existing, optionIndex]
                                  : existing.filter((v) => v !== optionIndex);
                                return arr;
                              });
                            }}
                          />
                        }
                        label={
                          <div dangerouslySetInnerHTML={{ __html: option }} />
                        }
                        sx={{
                          backgroundColor: handleBackgroundColor(
                            index,
                            optionIndex
                          ),
                          borderRadius: "8px",
                          marginBottom: "8px",
                          border: "1px solid black",
                          width: "100%",
                        }}
                      />
                    </ListItem>
                  ))}
            </List>
          </Box>
        ))
      ) : (
        <CircularProgress color="error" />
      )}

      <Button
        variant="contained"
        color="primary"
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
            message={`You scored ${((score / questions.length) * 100).toFixed(
              2
            )}%`}
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
