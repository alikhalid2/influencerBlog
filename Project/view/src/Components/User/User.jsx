// importing React
import React from "react";

// importing other components
import { useNavigate } from "react-router-dom";
import axios from "axios";
// importing style sheet
import "./user.css";

export default function User({ user }) {
  const navigate = useNavigate();
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await axios.delete("/users/" + user._id, {
        data: { userId: user._id },
      });
      navigate("/admin?choice=users");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="user">
      <img
        className="userimg"
        src={"/images/" + user.profilePic}
        alt="user"
        width="100px"
        height="100px"
      />

      <p className="username">{user.username}</p>

      <i
        onClick={handleDelete}
        className="singlePostIcon fa-regular fa-trash-can deliticon"
      ></i>
    </div>
  );
}
