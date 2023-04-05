import React, { useEffect } from "react";
import moment from "moment";
import "./Comment.css";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../app/commentsSlice";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Loading from "../loading/Loading";

export default function Comment() {
  const { linkToComments } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.comments.comments);
  const loadingComments = useSelector((state) => state.comments.isLoading);

  useEffect(() => {
    dispatch(fetchComments(linkToComments));
  }, [dispatch, linkToComments]);

  if (loadingComments) return <Loading />;
  return (
    <div className="container-box">
      <Link to="/">
        <button className="goback-btn">Go Back</button>
      </Link>
      {state.map((comment) => (
        <div key={uuid()} className="boxWidth">
          <div className="box-comments">
            <div className="flex-box-comments">
              <h2 className="comments-author">{comment.author}</h2>
              <p className="comments-time">
                {moment.unix(comment.created_utc).fromNow()}
              </p>
            </div>
            <ReactMarkdown
              children={comment.body}
              remarkPlugins={[remarkGfm]}
              className="comments-text"
            />
          </div>
        </div>
      ))}
      <Link to="/">
        <button className="goback-btn">Go Back</button>
      </Link>
    </div>
  );
}
