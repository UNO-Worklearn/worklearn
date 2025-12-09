/**
 *  @author: Phillip Nguyen
 *  Component: Quiz
 *  Date: 11/15/2023
 *  Objective: Building a quiz feature for students to complete quizzes on our own application
 *
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

  const [userResponseMC, setUserResponseMC] = useState([]);
  const [userResponsesMC, setUserResponsesMC] = useState([]);

  const [score, setScore] = useState(0);
  const [quizType, setQuizType] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(true);

  const { id, topicId, contentId } = useParams();

  useEffect(() => {
    const updateQuizScoreState = async () => {
      if (score > 0) {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/quiz`,
          // `http://localhost:3001/api/users/quiz`,
          {
            quizScore,
            type,
            user_id: localStorage.getItem("userID"),
          },
          { withCredentials: true }
        );
      }
    };
    if (submitted) {
      updateQuizScoreState();
    }
  }, [submitted, quizScore, type]);

  useEffect(() => {
    if (type === "decomposition") {
      setQuizType("decompositionScore");
    } else if (type === "pattern-recognition") {
      setQuizType("patternScore");
    } else if (type === "abstraction") {
      setQuizType("abstractionScore");
    } else if (type === "algorithms") {
      setQuizType("algorithmScore");
    } else if (type === "intro") {
      setQuizType("introScore");
    } else if (type === "python1") {
      setQuizType("pythonOneScore");
    } else if (type === "python2") {
      setQuizType("pythonTwoScore");
    } else if (type === "python3") {
      setQuizType("pythonThreeScore");
    } else if (type === "python5") {
      setQuizType("pythonFiveScore");
    } else if (type === "python6") {
      setQuizType("pythonSixScore");
    } else if (type === "python7") {
      setQuizType("pythonSevenScore");
    } else if (type === "review") {
      setQuizType("reviewScore");
    } else if (type === "email") {
      setQuizType("emailScore");
    } else if (type === "beyond") {
      setQuizType("beyondScore");
    } else if (type === "mainframe1") {
      setQuizType("mainframeOneScore");
    } else if (type === "mainframe2") {
      setQuizType("mainframeTwoScore"); 
    } else if (type === "mainframe3") {
      setQuizType("mainframeThreeScore");
    } else if (type === "mainframe4") {
      setQuizType("mainframeFourScore");
    } else if (type === "mainframe5") {
      setQuizType("mainframeFiveScore");
    } else if (type === "mainframe6") {
      setQuizType("mainframeSixScore");
    } else if (type === "cobol2") {
      setQuizType("cobolTwoScore");
    } else if (type === "cobol3") {
      setQuizType("cobolThreeScore");
    } else if (type === "cobol4") {
      setQuizType("cobolFourScore");
    } else if (type === "cobol6") {
      setQuizType("cobolSixScore");
    }
    if (score > 0) {
      updateQuizScore(score, quizType);
    }
  }, [type, score, quizType, updateQuizScore]);

  useEffect(() => {
    // Simulate fetching questions asynchronously
    // Replace this with your actual API call
    const fetchQuestions = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/questions`,
        // "http://localhost:3001/api/questions",
        { credentials: "include" }
      );
      const data = await response.json();

      const filteredData = data.filter((question) => question.type === type);
      const multipleChoiceQs = filteredData.filter(
        (question) => typeof question.correctAnswer === "object"
      );

      setNewQuestions(filteredData);
      setSelectedOptions(Array(filteredData.length).fill(null));
    };

    setSubmitted(false);
    setScore(0);
    fetchQuestions();
  }, [id, topicId, contentId, type]);

  useEffect(() => {
    const currentUserResponsesMC = correctAnswers.map((response) => {
      if (Array.isArray(response)) {
        return [];
      } else {
        return null;
      }
    });

    setUserResponsesMC(currentUserResponsesMC);
  }, [correctAnswers, type]);

  useEffect(() => {
    fetchQuestionsSuccess(newQuestions);
  }, [fetchQuestionsSuccess, newQuestions]);

  useEffect(() => {
    selectAnswer(questionIndex, userResponseMC);
    const updatedSelectedOptions = [...selectedOptions];

    // Update the specific index with the new userResponseMC
    updatedSelectedOptions[questionIndex] = userResponseMC;

    // Update the state with the modified selectedOptions array
    setSelectedOptions(updatedSelectedOptions);
  }, [selectAnswer, userResponseMC]);

  if (!questions) {
    return <>Loading...</>;
  }

  // console.log(selectedOptions);

  const handleOptionClick = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    if (typeof questions[questionIndex].correctAnswers !== "object") {
      setSelectedOptions(updatedSelectedOptions);
      selectAnswer(questionIndex, optionIndex); // Dispatch the selected answer to Redux
    }
  };

  const handleCheckboxChange = async (event, question, index, optionIndex) => {
    const { checked } = event.target;
    const updatedSelectedOptionsMC = [...selectedOptionsMC];
    const updatedSelectedOptions = [...selectedOptions];

    const currentSelectedOptionsMC = []; // have []
    console.log("updatedSelectedOptions[index]", index);
    console.log(updatedSelectedOptions);
    // if (currentSelectedOptionsMC.includes(optionIndex)) {
    //   currentSelectedOptionsMC.filter((option) => option !== optionIndex);
    // } else {
    //   currentSelectedOptionsMC.push(optionIndex);
    // }
    // console.log("currentSelectedOptionsMC");
    // console.log(currentSelectedOptionsMC);

    updatedSelectedOptionsMC[optionIndex] = checked;

    const currentUserResponsesMC = [...userResponsesMC];

    if (checked) {
      currentUserResponsesMC[index].push(optionIndex);
    } else {
      currentUserResponsesMC[index] = currentUserResponsesMC[index].filter(
        (option) => option !== optionIndex
      );
    }

    updatedSelectedOptions[index] = currentUserResponsesMC[index];
    setUserResponsesMC(currentUserResponsesMC);
    setSelectedOptions(updatedSelectedOptions);
    setQuestionIndex(index);
    setSelectedOptionsMC(updatedSelectedOptionsMC);
    selectAnswer(index, userResponseMC);
  };

  const handleNotificationClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotificationOpen(false);
  };

  const handleBackgroundColor = (index, optionIndex) => {
    if (submitted) {
      if (typeof selectedOptions[index] !== "object") {
        return selectedOptions[index] === optionIndex
          ? correctAnswers[index] === userResponses[index]
            ? "#00e348"
            : "#ff4141"
          : correctAnswers[index] === optionIndex
          ? "#00e348"
          : "#dddddd";
      } else {
        return correctAnswers[index] &&
          correctAnswers[index].includes(optionIndex)
          ? "#00e348"
          : "#ff4141";
      }
    }
    return selectedOptions[index] === optionIndex ? "#419aff" : "#ffffff";
  };

  const handleSubmit = () => {
    let newScore = score; // Initialize a variable to keep track of the new score

    // Compare userResponses with correctAnswers
    selectedOptions.forEach((response, index) => {
      if (typeof response !== "object") {
        if (response === correctAnswers[index]) {
          newScore++; // Increment the score when the response is correct
        }
        setTimeout(async () => {
          await axios.put(
            `${process.env.REACT_APP_BACKEND_URL}/api/questions`,
            // `http://localhost:3001/api/users/quiz`,
            {
              _id: questions[index]._id,
              rightOrWrong: response === correctAnswers[index] ? true : false,
            },
            { withCredentials: true }
          );
        }, 3000);
      } else {
        const sortedArr1 = response.slice().sort();
        const sortedArr2 = correctAnswers[index].slice().sort();
        if (response.length === correctAnswers[index].length) {
          if (sortedArr1.every((value, index) => value === sortedArr2[index])) {
            newScore++;
          }
        }
        setTimeout(async () => {
          await axios.put(
            `${process.env.REACT_APP_BACKEND_URL}/api/questions`,
            // `http://localhost:3001/api/users/quiz`,
            {
              _id: questions[index]._id,
              rightOrWrong:
                response.length === correctAnswers[index].length &&
                sortedArr1.every((value, index) => value === sortedArr2[index])
                  ? true
                  : false,
            },
            { withCredentials: true }
          );
        }, 3000);
      }
    });
    setScore(newScore); // Update the score state with the new score
    setSubmitted(true); // Set submitted to true to indicate the quiz has been submitted
  };

  return (
    <Box
      className="quiz-container"
      sx={{
        margin: "30px",
        padding: "30px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)", // Box shadow
      }}
    >
      <Alert severity="warning">
        Please refresh the page if the quiz does not come up.
      </Alert>

      {questions.length > 0 ? (
        questions.map((question, index) => (
          <Box
            key={index}
            className="question-card"
            sx={{ marginBottom: "20px" }}
          >
            {question.type === type && (
              <>
                <Box sx={{ marginBottom: "10px" }}>
                  <h6
                    style={{ fontWeight: "600" }}
                    dangerouslySetInnerHTML={{
                      __html: question.question,
                    }}
                  />
                </Box>
                {question.imgURL && (
                  <img
                    class="img-url"
                    src={question.imgURL}
                    alt={question.question}
                  />
                )}
                <List>
                  <>
                    {!Array.isArray(question.correctAnswer)
                      ? question.options?.map((option, optionIndex) => (
                          <ListItem key={optionIndex} disablePadding>
                            <ListItemButton
                              onClick={() =>
                                handleOptionClick(index, optionIndex)
                              }
                              sx={{
                                backgroundColor: handleBackgroundColor(
                                  index,
                                  optionIndex
                                ),
                                borderRadius: "8px",
                                padding: "12px",
                                marginBottom: "8px",
                                border: "1px solid #000000",
                                "&:hover": {
                                  backgroundColor: "#bfdfff", // Light red background on hover
                                },
                              }}
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: option,
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))
                      : question.options?.map((option, optionIndex) => (
                          <ListItem key={optionIndex} disablePadding>
                            <FormControlLabel
                              sx={{
                                backgroundColor: handleBackgroundColor(
                                  index,
                                  optionIndex
                                ),
                                borderRadius: "8px",
                                padding: "12px",
                                marginBottom: "8px",
                                border: "1px solid #000000",
                                width: "100%",
                              }}
                              control={
                                <Checkbox
                                  onChange={(event) =>
                                    handleCheckboxChange(
                                      event,
                                      question,
                                      index,
                                      optionIndex
                                    )
                                  }
                                />
                              }
                              label={
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: option,
                                  }}
                                />
                              }
                            />
                          </ListItem>
                        ))}
                  </>
                </List>
              </>
            )}
          </Box>
        ))
      ) : (
        <Grid
          item
          xs={12}
          mt={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CircularProgress color="error" />
        </Grid>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={submitted} // Disable button after submission
        sx={{ marginTop: "20px" }}
      >
        Submit Quiz
      </Button>
      {submitted && (
        <>
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            Your Score: {score} out of {questions.length}
          </Typography>
          <Notification
            open={notificationOpen}
            handleClose={handleNotificationClose}
            message={`You submitted successfully, your score is: ${(
              (score * 100) /
              questions.length
            ).toFixed(2)}%`}
            severity={"success"}
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
