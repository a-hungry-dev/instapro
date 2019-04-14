import {
  TEST_DISPATCH,
  POST_LOADING,
  GET_POST,
  GET_POSTS,
  ADD_POST
} from "../actions/Types";

//creates initial state
const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      console.log("testing dispatch");
      return { ...state, user: action.payload };
    case POST_LOADING:
      return { ...state, loading: true };
    case GET_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case GET_POST:
      return { ...state, post: action.payload, loading: false };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      };
    default:
      return state;
  }
}
