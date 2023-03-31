import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import "./SubReddits.css";
import { getSubreddit } from "../../../app/redditSlice";

export default function SubReddits() {
  const state = useSelector((state) => state.subreddits.subreddits);
  const dispatch = useDispatch();

  return (
    <div className="subreddits-box">
      <h1 className="subreddit-title">SubReddits</h1>
      {state.map((data) => (
        <div
          className="subreddit-text"
          key={uuid()}
          onClick={() => {
            dispatch(getSubreddit(data.url));
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
