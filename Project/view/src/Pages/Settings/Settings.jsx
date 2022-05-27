// importing React
import axios from "axios";
import React, { useContext, useState } from "react";

// importing other components
import SideBar from "../../Components/SideBar/SideBar.jsx";
import {
  updateStart,
  updateSuccess,
  updateFailure,
  remove,
} from "../../Context/Actions.js";

import { Context } from "../../Context/Context";
// importing style sheet
import "./settings.css";

export default function Settings() {
  const { user, isFetching, dispatch } = useContext(Context);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    setError(false);
    event.preventDefault();
    const newUser = {
      userId: user._id,
      username: username || user.username,
      email: email || user.email,
      password: password || user.password,
    };

    if (file) {
      try {
        const data = new FormData();
        const fileName = Date.now() + file.name;

        newUser.profilePic = fileName;
        data.append("name", fileName);
        data.append("file", file);
        axios.post("/upload", data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    dispatch(updateStart());
    try {
      const res = await axios.put("/users/" + user._id, newUser);
      dispatch(updateSuccess(res.data));
      setUsername(res.data.username);
      setEmail(res.data.email);
    } catch (error) {
      console.log(error);
      setError(true);
      dispatch(updateFailure(user));
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await axios.delete("/users/" + user._id, {
        data: { userId: user._id },
      });
      dispatch(remove());
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Acount</span>
          {!(user.planName === "admin") && (
            <span className="settingsDeleteTitle" onClick={handleDelete}>
              Delete Account
            </span>
          )}
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : user.profilePic && "/images/" + user.profilePic
              }
              alt="single post"
              width="70px"
              height="70px"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={(event) => setFile(event.target.files[0])}
              hidden
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={user.email === "admin@admin.com"}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="settingsSubmit"
            type="submit"
            disabled={isFetching}
          >
            Update
          </button>
          {error && <span className="settingsError">Error has happend!!!</span>}
        </form>
      </div>
      <SideBar />
    </div>
  );
}
