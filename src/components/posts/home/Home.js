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
import Loading from "../../loading/Loading";
import "./Home.css";

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
    return (
      <>
        <Loading />
      </>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="nofound">
        <h1>{`Match No Found "${searchPost}"`}</h1>
        <button
          className="nofound-btn"
          onClick={() => dispatch(getTermSearch(""))}
        >
          Go Back
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
