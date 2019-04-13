import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";

//list your reducers in here
export default combineReducers({
  auth: authReducer,
  errors: errorsReducer
});
