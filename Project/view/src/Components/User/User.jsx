// importing React
import React from "react";

// importing other components

// importing style sheet
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userimg">
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
        alt="user"
        width="40px"
        height="40px"
      />
      </div>
      <p className="username">username</p>

      <i className="singlePostIcon fa-regular fa-trash-can deliticon"></i>
    </div>
  );
}
