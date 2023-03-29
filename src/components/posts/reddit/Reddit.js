import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../app/redditSlice";
import { v4 as uuid } from "uuid";
import "./Reddit.css";
import Comment from "../../comments/Comment";
import { selectFilteredPosts } from "../../../app/redditSlice";
import SubReddits from "../subReddit/SubReddits";
import { selectSelectedSubreddit } from "../../../app/redditSlice";
import { getPostComments } from "../../../api/redditApi";

export default function Reddit() {
  const srd = useSelector(selectSelectedSubreddit);
  const aa = useSelector((state) => state.reddit.isLoading);
  const [activePosts, setActivePosts] = useState([]);
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const data = useSelector(selectFilteredPosts);

  function addActivePost(link, id) {
    (async () => {
      const com = await getPostComments(link);

      setActivePosts([
        ...activePosts,
        {
          id: id,
          comments: com.slice(0, 2),
        },
      ]);
    })();
  }

  useEffect(() => {
    dispatch(fetchPosts(srd));
  }, [dispatch, srd]);

  if (aa) return <div>loading</div>;
  return (
    <>
      <div className="cards">
        {data.map((post) => {
          return (
            <div className="box-container" key={uuid()}>
              <div className="ups">
                <h1>up</h1>
                <h2>{post.ups}</h2>
                <h1>up</h1>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <div className="cards-box">
                <img src={post.url} className="url-img" alt={"no found"} />
              </div>
              <button
                className="btn-comments"
                onClick={() => {
                  addActivePost(post.permalink, post.id);
                }}
              >
                comment
              </button>
              <h2 className="author-post">author</h2>
              <h2 className="time-post">time</h2>
              <div className="comments">
                {activePosts.map((activePost) => {
                  return activePost.id === post.id ? (
                    <div key={uuid()}>
                      <Comment
                        comments={activePost.comments}
                        permalink={activePost.permalink}
                      />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
