import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import "./SubReddits.css";
import { getSubreddit } from "../../../app/redditSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SubReddits(props) {
  const state = useSelector((state) => state.subreddits.subreddits);
  const dispatch = useDispatch();
  const [subredditActive, setSubredditActive] = useState(props.activeSubreddit);

  function handleActiveSubreddit(subRedditName) {
    setSubredditActive(subRedditName);
  }
  console.log(subredditActive);
  return (
    <div className="subreddits-box">
      <h1 className="subreddit-title">SubReddits</h1>
      {state.map((data) => (
        <Link
          to="/"
          key={uuid()}
          onClick={() => {
            dispatch(getSubreddit(data.url));
            handleActiveSubreddit(data.display_name);
          }}
          className={`subreddits${
            subredditActive === data.display_name ? "Active" : ""
          }`}
        >
          <img
            src={
              data.icon_img ||
              `http://api.adorable.io/avatar/${data.display_name}`
            }
            alt={data.display_name}
            className="subreddit-img"
          />
          <p className="subreddit-name">{data.display_name}</p>
        </Link>
      ))}
    </div>
  );
}
