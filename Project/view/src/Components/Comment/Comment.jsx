// importing react
import React, { useEffect, useState } from "react";

// importing other components
import axios from "axios";

// importing style sheet
import "./comment.css";

export default function Comment({ commentID }) {
  const [comment, setComment] = useState({
    username: "",
    profilePic: "",
    content: "",
    createdAt: "",
  });
  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get("/comments/" + commentID);
        setComment(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComment();
  }, []);

  return (
    <div className="comment">
      <div className="commentHeader">
        <img
          className="commentImage"
          src={comment.profilePic}
          alt="comment"
          width="40px"
          height="40px"
        />
        <span className="commentUsername">{comment.username}</span>
        <span className="commentDate">
          {new Date(comment.createdAt).toDateString}
        </span>
      </div>
      <p className="commentContent">{comment.content}</p>
    </div>
  );
}
