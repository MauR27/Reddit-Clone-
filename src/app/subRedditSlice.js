import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/redditApi";

const initialState = {
  subreddits: [],
  isLoading: false,
  error: false,
};

export const subRedditSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {
    startGetSubreddit(state) {
      state.isLoading = true;
      state.error = false;
    },
    getSubredditSuccess(state, action) {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    getSubredditFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { startGetSubreddit, getSubredditFailed, getSubredditSuccess } =
  subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
  try {
    dispatch(startGetSubreddit());
    const subreddits = await getSubreddits();

    dispatch(getSubredditSuccess(subreddits));
  } catch {
    dispatch(getSubredditFailed());
  }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;
