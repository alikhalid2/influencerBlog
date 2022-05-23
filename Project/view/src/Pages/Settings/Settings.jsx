// importing React
import axios from "axios";
import React, { useContext, useState } from "react";

// importing other components
import SideBar from "../../Components/SideBar/SideBar.jsx";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../../Context/Actions.js";

import { Context } from "../../Context/Context";
// importing style sheet
import "./settings.css";

export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      username: username || user.username,
      email: email || user.email,
      password: password || user.password,
    };

    dispatch(updateStart());
    try {
      const res = await axios.put("/users/" + user._id, newUser);

      dispatch(updateSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(updateFailure());
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Acount</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={"/images/" + user.profilePic}
              alt="single post"
              width="70px"
              height="70px"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" hidden />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Elkfafy"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="elkfafy@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Username</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
