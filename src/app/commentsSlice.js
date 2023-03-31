import { createSlice } from "@reduxjs/toolkit";
import { getPostComments } from "../api/redditApi";

const initialState = {
  comments: [],
  isLoading: false,
  error: false,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    startComments(state, action) {
      state.isLoading = true;
      state.error = false;
    },
    commentsSuccess(state, action) {
      state.isLoading = false;
      state.comments = action.payload;
    },
    commentsFailed(state, action) {
      state.isLoading = false;
      state.error = true;
    },
    getId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { startComments, commentsSuccess, commentsFailed, getId } =
  commentsSlice.actions;

export default commentsSlice.reducer;

export const fetchComments = (link) => async (dispatch) => {
  try {
    dispatch(startComments());
    const comments = await getPostComments(link);
    dispatch(commentsSuccess(comments));
  } catch {
    dispatch(commentsFailed());
  }
};
