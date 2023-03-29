import React, { useState, useEffect } from "react";
import { getPostComments } from "../../api/redditApi";
import moment from "moment";
import "./Comment.css";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";

export default function Comment(props) {
  const loadingComments = useSelector((state) => state.reddit.isLoading);

  // console.log(loadingComments);
  if (loadingComments) return <div>Loading comements</div>;

  return (
    <div className="prueba">
      {props.comments.map((comment) => (
        <div key={uuid()}>
          <div className="a">
            <div className="aaa">
              <h1 className="author">{comment.author}</h1>
              <h2 className="time">
                {moment.unix(comment.created_utc).fromNow()}
              </h2>
            </div>
            <p className="comment-author">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
