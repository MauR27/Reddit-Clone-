import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubreddits } from "../../../app/subRedditSlice";
import { v4 as uuid } from "uuid";
import "./SubReddits.css";
import { selectSelectedSubreddit } from "../../../app/redditSlice";
import { getSubreddit } from "../../../app/redditSlice";

export default function SubReddits() {
  const state = useSelector((state) => state.subreddits.subreddits);
  const [subReddit, setSubReddit] = useState("/r/pics/");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubreddits());
    dispatch(getSubreddit(subReddit));
  }, [dispatch, subReddit]);

  return (
    <div className="subreddits-box">
      <h1 className="subreddit-title">SubReddits</h1>
      {state.map((data) => (
        <div
          className="subreddit-text"
          key={uuid()}
          onClick={(e) => {
            e.preventDefault();
            setSubReddit(data.url);
          }}
        >
          <img
            src={
              data.icon_img ||
              `http://api.adorable.io/avatar/${data.display_name}`
            }
            alt={data.display_name}
            className="subreddit-img"
          />
          <h2>{data.display_name}</h2>
        </div>
      ))}
    </div>
  );
}
