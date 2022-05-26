// importing React
import React, { useState } from "react";

// importing other component
import Comment from "../Comment/Comment.jsx";

// importing style sheet
import "./comments.css";

export default function Comments() {
  const [comment, setComment] = useState("");

  const handleComment = () => {};
  return (
    <div calssName="comments">
      <input type="text" value={comment} onChange={() => setComment(comment)} />
      <button onClick={handleComment}>Comment</button>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}
