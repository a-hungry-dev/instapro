import Axios from "axios";

import {
  TEST_DISPATCH,
  GET_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING
} from "./Types";

export const postLoading = () => {
  return {
    type: POST_LOADING
  };
};

export const getPosts = () => dispatch => {
  dispatch(postLoading());
  Axios.get("/api/posts")
    .then(res => dispatch({ type: GET_POSTS, payload: res.data }))
    .catch(err => dispatch({ type: GET_POSTS, payload: {} }));
};
