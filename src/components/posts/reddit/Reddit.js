import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../app/redditSlice";
import { v4 as uuid } from "uuid";
import "./Reddit.css";
import { selectFilteredPosts } from "../../../app/redditSlice";
import { selectSelectedSubreddit } from "../../../app/redditSlice";
import { Link } from "react-router-dom";
import moment from "moment";
import { abbreviateNumber } from "js-abbreviation-number";

export default function Reddit() {
  const srd = useSelector(selectSelectedSubreddit);
  const aa = useSelector((state) => state.reddit.isLoading);
  const dispatch = useDispatch();
  const data = useSelector(selectFilteredPosts);

  useEffect(() => {
    dispatch(fetchPosts(srd));
  }, [dispatch, srd]);

  console.log(data);
  if (aa) return <div>loading</div>;
  return (
    <>
      <div className="cards">
        {data.map((post) => {
          let ups = abbreviateNumber(post.ups, 1);
          console.log(ups);
          return (
            <div className="box-container" key={uuid()}>
              <div className="ups">
                <h1>up</h1>
                <h2>{ups}</h2>
                <h1>up</h1>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <div className="cards-box">
                <img src={post.url} className="url-img" alt={"no found"} />
              </div>
              <Link
                to={`/comments/${encodeURIComponent(post.permalink)}`}
                className="btn-comments"
              >
                comment
              </Link>
              <h2 className="author-post">{post.author}</h2>
              <h2 className="time-post">
                {moment.unix(post.created_utc).fromNow()}
              </h2>
              <div className="comments"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
