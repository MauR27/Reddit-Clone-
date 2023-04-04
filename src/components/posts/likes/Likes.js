import React, { useState } from "react";
import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";
import "./Likes.css";

export default function Likes(props) {
  const [likes, setLikes] = useState(props.votes);

  function handleLikes(num) {
    if (num === 1) {
      return setLikes(2);
    }
    return setLikes(1);
  }

  return (
    <div>
      <div>
        <TbArrowBigUp
          onClick={() => handleLikes(1)}
          className={`vote${likes === 2 ? "ActiveUp" : ""}`}
        />
      </div>
      <p className={`votesUps`}>{props.ups}</p>
      <div>
        <TbArrowBigDown
          onClick={() => handleLikes(2)}
          className={`vote${likes === 1 ? "ActiveDown" : ""}`}
        />
      </div>
    </div>
  );
}
