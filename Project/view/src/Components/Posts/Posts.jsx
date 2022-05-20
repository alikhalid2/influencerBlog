// importing React
import React from "react";

// importing other components
import Post from "../Post/Post.jsx";

// importing styling
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}
