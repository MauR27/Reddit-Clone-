import { createSlice } from "@reduxjs/toolkit";
import { getSubredditPosts } from "../api/redditApi";
import { getPostComments } from "../api/redditApi";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  comments: [],
  error: false,
  isLoading: false,
  searchTerm: "",
  selectedSubreddit: "/r/pics/",
};

export const redditSlice = createSlice({
  name: "reddit",
  initialState,
  reducers: {
    startGetPost(state) {
      state.isLoading = true;
      state.error = false;
    },

    getPostSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },

    getPostFailed(state, action) {
      state.isLoading = false;
      state.error = true;
    },
    getSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
    },
  },
});

export default redditSlice.reducer;
export const { startGetPost, getPostSuccess, getPostFailed, getSubreddit } =
  redditSlice.actions;

export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(startGetPost());
    const posts = await getSubredditPosts(subreddit);

    const postWithMetaData = posts.map((post) => ({
      ...post,
      showingComments: false,
    }));
    dispatch(getPostSuccess(postWithMetaData));
  } catch {
    dispatch(getPostFailed());
  }
};

export const selectedPost = (state) => state.reddit.posts;
export const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
  [selectedPost, selectSearchTerm],
  (posts, searchTerm) => {
    if (searchTerm !== "") {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return posts;
  }
);
