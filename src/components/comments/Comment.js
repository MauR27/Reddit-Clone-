import React, { useEffect } from "react";
import moment from "moment";
import "./Comment.css";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../app/commentsSlice";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Comment() {
  const { linkToComments } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.comments.comments);
  const loadingComments = useSelector((state) => state.comments.isLoading);

  useEffect(() => {
    dispatch(fetchComments(linkToComments));
  }, [dispatch]);

  console.log(state);
  if (loadingComments) return <h1>loading</h1>;
  return (
    <div className="prueba">
      <Link to="/">back</Link>
      {state.map((comment) => (
        <div key={uuid()}>
          <div className="a">
            <div className="aaa">
              <h1 className="author">{comment.author}</h1>
              <h2 className="time">
                {moment.unix(comment.created_utc).fromNow()}
              </h2>
            </div>
            <ReactMarkdown
              children={comment.body}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
