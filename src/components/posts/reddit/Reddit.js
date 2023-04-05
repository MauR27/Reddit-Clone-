import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import "./Reddit.css";
import { selectFilteredPosts } from "../../../app/redditSlice";
import { Link } from "react-router-dom";
import moment from "moment";
import { abbreviateNumber } from "js-abbreviation-number";
import { MdOutlineModeComment } from "react-icons/md";
import Likes from "../likes/Likes";

export default function Reddit() {
  const posts = useSelector(selectFilteredPosts);
  const votes = 0;

  return (
    <>
      <div className="cards">
        {posts.map((post) => {
          console.log(post);
          let ups = abbreviateNumber(post.ups, 1);
          let imgRegex = /jpg|png$/;
          let imgTest = imgRegex.test(post.url);
          return (
            <div className="box-container" key={uuid()}>
              <div className="ups">
                <Likes ups={ups} votes={votes} />
              </div>
              <h2 className="post-title">{post.title}</h2>
              <div className="cards-box">
                {imgTest ? (
                  <img src={post.url} className="url-img" alt={post.title} />
                ) : (
                  <div className="original-post">
                    <a target="_blank" href={post.url}>
                      Original post!
                    </a>
                  </div>
                )}
              </div>
              <Link
                to={`/comments/${encodeURIComponent(post.permalink)}`}
                className="link-comments"
              >
                <MdOutlineModeComment className="btn-comments" />
              </Link>
              <p className="num-comments">
                {abbreviateNumber(post.num_comments, 1)}
              </p>
              <h2 className="author-post">{post.author}</h2>
              <p className="time-post">
                {moment.unix(post.created_utc).fromNow()}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
