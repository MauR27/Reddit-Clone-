import { configureStore, combineReducers } from "@reduxjs/toolkit";
import redditReducers from "./redditSlice";
import subRedditReducers from "./subRedditSlice";
import commentsReducers from "./commentsSlice";

export const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducers,
    subreddits: subRedditReducers,
    comments: commentsReducers,
  }),
});
