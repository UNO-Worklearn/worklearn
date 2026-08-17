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

import axios from "axios";
import { useParams } from "react-router";

import "./Quiz.css";

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

  /** Map quiz type to DB score field */
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
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/questions`,
          { credentials: "include" }
        );

        const data = await res.json();

        const filtered = data.filter((q) => q.type === type);

        setNewQuestions(filtered);

        /*
         * selectedOptions contains the answer for EVERY question.
         *
         * Single-choice:
         *   null -> then becomes a number such as 0, 1, 2
         *
         * Multi-select:
         *   starts as []
         */
        setSelectedOptions(
          filtered.map((q) =>
            Array.isArray(q.correctAnswer) ? [] : null
          )
        );

        setUserResponsesMC(
          filtered.map((q) =>
            Array.isArray(q.correctAnswer) ? [] : null
          )
        );
      } catch (err) {
        console.error("Failed to load quiz questions:", err);
      }
    };

    setSubmitted(false);
    setScore(0);
    setNotificationOpen(true);

    loadQuestions();
  }, [id, topicId, contentId, type]);

  /** Push questions to Redux */
  useEffect(() => {
    fetchQuestionsSuccess(newQuestions);
  }, [newQuestions, fetchQuestionsSuccess]);

  /** Handle single-choice selection */
  const handleOptionClick = (qIndex, optIndex) => {
    if (submitted) return;

    setSelectedOptions((prev) => {
      const updated = [...prev];
      updated[qIndex] = optIndex;
      return updated;
    });

    selectAnswer(qIndex, optIndex);
  };

  /** Handle multi-choice checkbox */
  const handleCheckboxChange = (e, qIndex, optIndex) => {
    if (submitted) return;

    const checked = e.target.checked;

    /*
     * Get the selections ONLY for this question.
     * Do not overwrite answers from the other questions.
     */
    const currentSelections = Array.isArray(userResponsesMC[qIndex])
      ? [...userResponsesMC[qIndex]]
      : [];

    let updatedSelections;

    if (checked) {
      updatedSelections = currentSelections.includes(optIndex)
        ? currentSelections
        : [...currentSelections, optIndex];
    } else {
      updatedSelections = currentSelections.filter(
        (x) => x !== optIndex
      );
    }

    /*
     * Update multi-choice state.
     */
    setUserResponsesMC((prev) => {
      const updated = [...prev];
      updated[qIndex] = updatedSelections;
      return updated;
    });

    /*
     * IMPORTANT:
     * Update ONLY this question inside selectedOptions.
     *
     * The previous version did:
     *
     * setSelectedOptions(updated);
     *
     * where "updated" was userResponsesMC.
     * That erased all previous single-choice answers.
     */
    setSelectedOptions((prev) => {
      const updated = [...prev];
      updated[qIndex] = updatedSelections;
      return updated;
    });

    selectAnswer(qIndex, updatedSelections);
  };

  /** Background color logic */
  const handleBackground = (qIndex, optIndex) => {
    const response = selectedOptions[qIndex];

    const isSelected = Array.isArray(response)
      ? response.includes(optIndex)
      : response === optIndex;

    /*
     * Before submit:
     * selected answers are blue
     */
    if (!submitted) {
      return isSelected ? "#419aff" : "#fff";
    }

    const correct = correctAnswers[qIndex];

    const isCorrect = Array.isArray(correct)
      ? correct.includes(optIndex)
      : correct === optIndex;

    /*
     * After submit:
     *
     * Correct option = green
     * Selected wrong option = red
     * Everything else = gray
     */
    if (isCorrect) return "#00e348";

    if (isSelected && !isCorrect) {
      return "#ff4141";
    }

    return "#ddd";
  };

  /** SUBMIT QUIZ */
  const handleSubmit = async () => {
    let rawScore = 0;

    selectedOptions.forEach((resp, i) => {
      const correct = correctAnswers[i];

      /*
       * Single-choice question
       */
      if (!Array.isArray(correct)) {
        if (resp === correct) {
          rawScore++;
        }

        return;
      }

      /*
       * Multi-select question
       *
       * Protect against null/undefined.
       */
      const userAnswers = Array.isArray(resp) ? resp : [];

      const sortedUser = [...userAnswers].sort(
        (a, b) => a - b
      );

      const sortedCorrect = [...correct].sort(
        (a, b) => a - b
      );

      if (
        sortedUser.length === sortedCorrect.length &&
        sortedUser.every(
          (value, index) =>
            value === sortedCorrect[index]
        )
      ) {
        rawScore++;
      }
    });

    setScore(rawScore);
    setSubmitted(true);

    const totalQuestions = questions.length;

    const percent =
      totalQuestions > 0
        ? (rawScore / totalQuestions) * 100
        : 0;

    const timeSpent = Math.round(
      (Date.now() - startTime) / 1000
    );

    console.log("Quiz type:", type);
    console.log("Selected answers:", selectedOptions);
    console.log("Correct answers:", correctAnswers);
    console.log("Raw score:", rawScore);
    console.log("Percent:", percent);

    /** Update Redux score (local only) */
    const scoreField = typeToField[type];

    if (scoreField) {
      updateQuizScore(rawScore, scoreField);
    }

    /** Log activity to backend */
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/activity/quiz`,
        {
          user_id: localStorage.getItem("userID"),
          type,
          score: percent,
          timeSpent,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Quiz activity recorded ✔");
    } catch (err) {
      console.error(
        "Quiz activity FAILED:",
        err.response?.data || err
      );
    }

    /** Update progress page score in backend */
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/quiz`,
        {
          user_id: localStorage.getItem("userID"),
          type,
          quizScore: rawScore,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Progress score updated ✔");
    } catch (err) {
      console.error(
        "Score update FAILED:",
        err.response?.data || err
      );
    }
  };

  return (
    <Box
      className="quiz-container"
      sx={{
        margin: "30px",
        padding: "30px",
      }}
    >
      <Alert severity="warning">
        Please refresh the page if the quiz does not load.
      </Alert>

      {questions.length > 0 ? (
        questions.map((question, qIndex) => (
          <Box
            key={question._id || qIndex}
            sx={{
              marginBottom: "20px",
            }}
          >
            <h6
              style={{
                fontWeight: "600",
              }}
              dangerouslySetInnerHTML={{
                __html: question.question,
              }}
            />

            {question.imgURL && (
              <img
                className="img-url"
                src={question.imgURL}
                alt="question"
              />
            )}

            <List>
              {!Array.isArray(question.correctAnswer)
                ? question.options.map(
                    (opt, optIndex) => (
                      <ListItem
                        key={optIndex}
                        disablePadding
                      >
                        <ListItemButton
                          onClick={() =>
                            handleOptionClick(
                              qIndex,
                              optIndex
                            )
                          }
                          sx={{
                            backgroundColor:
                              handleBackground(
                                qIndex,
                                optIndex
                              ),
                            borderRadius: "8px",
                            marginBottom: "8px",
                            border:
                              "1px solid #000",
                          }}
                          disabled={submitted}
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: opt,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    )
                  )
                : question.options.map(
                    (opt, optIndex) => (
                      <ListItem
                        key={optIndex}
                        disablePadding
                      >
                        <FormControlLabel
                          sx={{
                            backgroundColor:
                              handleBackground(
                                qIndex,
                                optIndex
                              ),
                            borderRadius: "8px",
                            marginBottom: "8px",
                            border:
                              "1px solid #000",
                            width: "100%",
                          }}
                          control={
                            <Checkbox
                              checked={
                                Array.isArray(
                                  selectedOptions[
                                    qIndex
                                  ]
                                )
                                  ? selectedOptions[
                                      qIndex
                                    ].includes(
                                      optIndex
                                    )
                                  : false
                              }
                              disabled={submitted}
                              onChange={(e) =>
                                handleCheckboxChange(
                                  e,
                                  qIndex,
                                  optIndex
                                )
                              }
                            />
                          }
                          label={
                            <div
                              dangerouslySetInnerHTML={{
                                __html: opt,
                              }}
                            />
                          }
                        />
                      </ListItem>
                    )
                  )}
            </List>
          </Box>
        ))
      ) : (
        <Grid
          container
          justifyContent="center"
          mt={5}
        >
          <CircularProgress color="error" />
        </Grid>
      )}

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={
          submitted ||
          questions.length === 0
        }
        sx={{
          marginTop: "20px",
        }}
      >
        Submit Quiz
      </Button>

      {submitted && (
        <>
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
            }}
          >
            Your Score: {score} /{" "}
            {questions.length}
          </Typography>

          <Notification
            open={notificationOpen}
            handleClose={() =>
              setNotificationOpen(false)
            }
            message={`Score: ${
              questions.length > 0
                ? (
                    (score /
                      questions.length) *
                    100
                  ).toFixed(2)
                : "0.00"
            }%`}
            severity="success"
          />
        </>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  questions: state.quiz.questions,
  correctAnswers:
    state.quiz.correctAnswers,
});

export default connect(
  mapStateToProps,
  {
    fetchQuestionsSuccess,
    selectAnswer,
    updateQuizScore,
  }
)(Quiz);
