import { configureStore, combineReducers } from "@reduxjs/toolkit";
import redditReducers from "./redditSlice";
import subRedditReducers from "./subRedditSlice";

export const store = configureStore({
  reducer: combineReducers({
    reddit: redditReducers,
    subreddits: subRedditReducers,
  }),
});
