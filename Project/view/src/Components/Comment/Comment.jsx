// importing react
import React from "react";

// importing other components

// importing style sheet
import "./comment.css";

export default function Comment() {
  return (
    <div className="comment">
      <div className="commentHeader">
        <img src="" alt="comment" width="50px" height="50px" />
        <h1>username</h1>
        <span>1 hour ago</span>
      </div>
      <p className="commentContent">Hi there I am a lonely comment</p>
    </div>
  );
}
