import {
  createStore,
  combineReducers,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../redux/reducers/userReducer";
import quizReducer from "./reducers/quizReducer";

const rootReducer = combineReducers({
  user: userReducer,
  quiz: quizReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
