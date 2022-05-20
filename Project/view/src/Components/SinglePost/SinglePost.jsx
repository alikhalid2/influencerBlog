// importing axios
import axios from "axios";
// importing React
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

// importing other components

// importing style page
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const postID = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchPost = async (postID) => {
      const res = await axios.get("/posts/" + postID);
      setPost(res.data);
    };
    fetchPost(postID);
  }, [postID]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImage"
            src={post.photo}
            alt="single post"
            width="100%"
            height="300px"
          />
        )}

        <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-regular fa-trash-can"></i>
        </div>

        <h1 className="singlePostTitle">{post.title}</h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <strong>
              <Link to={"/?user=" + post.username} className="link">
                {post.username}
              </Link>
            </strong>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
