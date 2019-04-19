import Axios from "axios";

import {
  // TEST_DISPATCH,
  GET_ERRORS,
  GET_POSTS,
  // GET_POST,
  POST_LOADING,
  ADD_POST
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

export const addPost = newPost => dispatch => {
  dispatch(postLoading());
  Axios.post("/api/posts", newPost)
    .then(res => dispatch({ type: ADD_POST, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: {} }));
};
