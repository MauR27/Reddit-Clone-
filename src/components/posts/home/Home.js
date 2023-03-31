import Reddit from "../reddit/Reddit";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  getTermSearch,
  selectFilteredPosts,
} from "../../../app/redditSlice";
import { useEffect } from "react";
import { selectSelectedSubreddit } from "../../../app/redditSlice";
import { fetchSubreddits } from "../../../app/subRedditSlice";

export default function Home() {
  const searchPost = useSelector((post) => post.reddit.searchTerm);
  const posts = useSelector(selectFilteredPosts);
  const subredditSelected = useSelector(selectSelectedSubreddit);
  const dispatch = useDispatch();
  const loadingPosts = useSelector((state) => state.reddit.isLoading);

  useEffect(() => {
    dispatch(fetchPosts(subredditSelected));
    dispatch(fetchSubreddits());
  }, [dispatch, subredditSelected]);

  if (loadingPosts) {
    return <div>loading</div>;
  }

  if (posts.length === 0) {
    return (
      <div>
        <h1>{`Match no found "${searchPost}"`}</h1>
        <button onClick={() => dispatch(getTermSearch(""))}>
          back to home
        </button>
      </div>
    );
  }
  return (
    <>
      <Reddit />
    </>
  );
}
