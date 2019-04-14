import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import postReducer from "./postReducer";
//list your reducers in here
export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  posts: postReducer
});
