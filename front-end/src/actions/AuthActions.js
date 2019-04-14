import { GET_ERRORS, SET_CURRENT_USER } from "./Types";
import Axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../utils/setAuthToken";

export const registerUser = (userData, history) => dispatch => {
  console.log("registering");

  Axios.post("/api/users/register", userData)
    .then(res => {
      loginUser(userData, history);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = (userData, history) => dispatch => {
  Axios.post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      setAuthToken(token);
      const decoded_token = jwt_decode(token);
      dispatch(setCurrentUser(decoded_token));
      // history.push("/feed");
    }) //login auto?
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded_token => {
  return { type: SET_CURRENT_USER, payload: decoded_token };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
