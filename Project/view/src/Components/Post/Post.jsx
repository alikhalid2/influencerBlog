import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImage"
          src="post.photo"
          alt="post"
          width="100%"
          height="280px"
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories &&
            post.categories.map((cat) => (
              <span className="postCat" key={cat}>
                <Link to={"/?cat=" + cat} className="link">
                  {cat}
                </Link>
              </span>
            ))}
        </div>
        <span className="postTitle">
          <Link to={"/post/" + post._id} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
