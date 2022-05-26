// importing React
import React from "react";

// importing other components
import User from "../User/User.jsx";

// importing style sheet
import "./users.css";

export default function Users() {
  return (
    <div className="users">
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}
