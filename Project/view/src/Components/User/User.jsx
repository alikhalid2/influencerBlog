// importing React
import React from "react";

// importing other components
import axios from "axios";
// importing style sheet
import "./user.css";

export default function User({ user, trigger }) {
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await axios.delete("/users/" + user._id, {
        data: { userId: user._id },
      });

      trigger(user._id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="user">
      {user.profilePic && (
        <img
          className="userimg"
          src={"/images/" + user.profilePic}
          alt="user"
          onError={(event) => (event.target.src = "default.jpeg")}
          width="100px"
          height="100px"
        />
      )}

      <p className="username">{user.username}</p>

      <i
        onClick={handleDelete}
        className="singlePostIcon fa-regular fa-trash-can deliticon"
      ></i>
    </div>
  );
}
