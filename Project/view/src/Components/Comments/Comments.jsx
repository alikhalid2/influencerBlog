// importing React
import React, { useContext, useState } from "react";

// importing other component
import Comment from "../Comment/Comment.jsx";
import { Context } from "../../Context/Context.js";
import axios from "axios";

// importing style sheet
import "./comments.css";

export default function Comments({ comments, postID }) {
  const { user } = useContext(Context);
  const [comment, setComment] = useState("");

  const handleComment = async () => {
    try {
      const newComment = {
        userID: user._id,
        content: comment,
      };
      const res = await axios.post("/comments", { ...newComment, postID });
      comments.push(res.data.comment._id);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="comments">
      <div className="commentsHeader">
        <input
          className="commentsInput"
          type="text"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Enter Comment..."
        />
        <button className="commentsButton" onClick={handleComment}>
          Comment
        </button>
      </div>
      <div className="commentsContainer">
        {comments.map((c) => (
          <Comment key={c} commentID={c} />
        ))}
      </div>
    </div>
  );
}
