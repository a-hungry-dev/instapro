import { TEST_DISPATCH, GET_ERRORS } from "./Types";
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
    .then(res => history.push("/feed")) //login auto?
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
