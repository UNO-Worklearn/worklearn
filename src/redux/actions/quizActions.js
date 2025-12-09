// quizActions.js

export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const SELECT_ANSWER = "SELECT_ANSWER";
export const FETCH_CORRECT_ANSWERS = "CORRECT_ANSWERS";

export const fetchQuestionsSuccess = (questions) => {
  const correctAnswers = questions.map((question) => question.correctAnswer);

  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: {
      questions,
      correctAnswers,
    },
  };
};

export const selectAnswer = (questionIndex, selectedOption) => {
  return {
    type: SELECT_ANSWER,
    payload: { questionIndex, selectedOption },
  };
};

export const fetchCorrectAnswers = (correctAnswers) => {
  return {
    type: FETCH_CORRECT_ANSWERS,
    payload: correctAnswers,
  };
};
