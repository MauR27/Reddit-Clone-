import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../app/redditSlice";
import { v4 as uuid } from "uuid";
import "./Reddit.css";
import { selectFilteredPosts } from "../../../app/redditSlice";
import { selectSelectedSubreddit } from "../../../app/redditSlice";
import { Link } from "react-router-dom";
import moment from "moment";
import { abbreviateNumber } from "js-abbreviation-number";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";

export default function Reddit() {
  const subredditSelected = useSelector(selectSelectedSubreddit);
  const loadingPosts = useSelector((state) => state.reddit.isLoading);
  const dispatch = useDispatch();
  const posts = useSelector(selectFilteredPosts);
  const [votes, setVotes] = useState(0);

  function upVotes() {
    setVotes(1);
  }

  function downVotes() {
    setVotes(0);
  }
  // if (loadingPosts) return <div>loading</div>;
  return (
    <>
      <div className="cards">
        {posts.map((post) => {
          let ups = abbreviateNumber(votes + post.ups, 1);
          return (
            <div className="box-container" key={uuid()}>
              <div className="ups">
                <TbArrowBigUp onClick={upVotes} />
                <p>{ups}</p>
                <TbArrowBigDown onClick={downVotes} />
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
