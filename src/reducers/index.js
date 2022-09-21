import axios from "axios";
import { combineReducers } from "redux";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "ADD_POST":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({ posts: postReducer });
