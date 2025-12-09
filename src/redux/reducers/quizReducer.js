// quizReducer.js

import {
  FETCH_CORRECT_ANSWERS,
  FETCH_QUESTIONS_SUCCESS,
  SELECT_ANSWER,
} from "../actions/quizActions";

const initialState = {
  questions: [],
  userResponses: [],
  correctAnswers: [],
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload.questions,
        correctAnswers: action.payload.correctAnswers,
      };
    case SELECT_ANSWER:
      const { questionIndex, selectedOption } = action.payload;
      const updatedUserResponses = [...state.userResponses];
      updatedUserResponses[questionIndex] = selectedOption;
      return {
        ...state,
        userResponses: updatedUserResponses,
      };

    case FETCH_CORRECT_ANSWERS:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default quizReducer;
