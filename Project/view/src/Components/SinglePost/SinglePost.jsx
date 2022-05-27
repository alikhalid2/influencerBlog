// importing axios
import axios from "axios";
// importing React
import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

// importing other components
import Comments from "../../Components/Comments/Comments.jsx";
import { Context } from "../../Context/Context.js";

// importing style page
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const postID = location.pathname.split("/")[2];
  const [post, setPost] = useState({ comments: [], _id: "" });
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + post._id, { username: user.username });
      navigate("/");
    } catch (error) {
      alert("error happend!!!");
    }
  };

  const HandleUpdate = async (event) => {
    event.preventDefault();
    event.target.disabled = true;
    const newPost = {
      title,
      desc,
    };
    try {
      const res = await axios.put("/posts/" + post._id, newPost);
      const { userID, ...updatedPost } = res.data;

      updatedPost.username = post.username;
      setPost(updatedPost);
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
      event.target.disabled = false;
    }
  };

  useEffect(() => {
    const fetchPost = async (postID) => {
      const postData = await axios.get("/posts/" + postID);
      const usernameData = await axios.get("/users/" + postData.data.userID);
      const { userID, ...thePost } = {
        ...postData.data,
        username: usernameData.data.username,
      };
      setPost(thePost);
      setTitle(thePost.title);
      setDesc(thePost.desc);
    };
    fetchPost(postID);
  }, [postID]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImage"
            src={"/images/" + post.photo}
            alt="single post"
            width="100%"
            height="300px"
            onError={(event) => (event.target.src = "/default.jpeg")}
          />
        )}
        {updateMode ? (
          <input
            type="text"
            className="singlePostTitleInput"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            autoFocus
          />
        ) : (
          <React.Fragment>
            <h1 className="singlePostTitle">
              {post.title}
              {user.username === post.username && (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon fa-regular fa-pen-to-square"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon fa-regular fa-trash-can"
                    onClick={handleDelete}
                  ></i>
                </div>
              )}
            </h1>
          </React.Fragment>
        )}

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
        {updateMode ? (
          <React.Fragment>
            <textarea
              type="text"
              className="singlePostDescTextarea"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
            ></textarea>
            <button onClick={HandleUpdate} className="singlePostButton">
              Update
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p className="singlePostDesc">{post.desc}</p>
            <Comments comments={post.comments} postID={post._id} />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
