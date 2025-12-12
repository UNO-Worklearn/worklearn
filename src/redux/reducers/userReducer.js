import {
  FETCH_ALL_USERS,
  FETCH_USER,
  LOG_OUT,
  RESET_PROGRESS,
  SET_PROGRESS,
  SET_USER,
  SET_USER_ROLE,
  UPDATE_QUIZ_SCORE,
} from "../actions/userActions";

const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  users: [],
  user: storedUser || null,
  progress: 0,
  role: "student",

  // Stores the *last* quiz score sent from Quiz.js before backend PUT
  quizScore: null,

  // Max scores for progress page
  totalScore: {
    decompositionScore: 9,
    patternScore: 6,
    abstractionScore: 6,
    algorithmScore: 6,
    introScore: 15,
    pythonOneScore: 6,
    pythonTwoScore: 5,
    pythonThreeScore: 7,
    pythonFiveScore: 4,
    pythonSixScore: 5,
    pythonSevenScore: 6,
    reviewScore: 15,
    emailScore: 0,
    beyondScore: 0,
    mainframeOneScore: 14,
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case FETCH_USER:
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user")),
      };

    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };

    case SET_USER_ROLE:
      localStorage.setItem("role", JSON.stringify(action.payload));
      return {
        ...state,
        role: action.payload,
      };

    /* ------------------------------------------------------
       UPDATE_QUIZ_SCORE
       Stores the score in Redux so Quiz.js can send to backend
       payload = { quizScore, type }
    ------------------------------------------------------ */
    case UPDATE_QUIZ_SCORE:
      return {
        ...state,
        quizScore: {
          score: action.payload.quizScore,
          type: action.payload.type,
        },
      };

    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };

    case RESET_PROGRESS:
      return {
        ...state,
        progress: 0,
      };

    case LOG_OUT:
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      return {
        ...state,
        user: null,
        role: "student",
        quizScore: null,
      };

    default:
      return state;
  }
};
