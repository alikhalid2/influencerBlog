// importing React
import React, { useContext, useState } from "react";

// importing other components
import SideBar from "../../Components/SideBar/SideBar.jsx";

import { Context } from "../../Context/Context";
// importing style sheet
import "./settings.css";

export default function Settings() {
  const { user } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Acount</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
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
            onClick={(event) => setUsername(event.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="elkfafy@gmail.com"
            value={email}
            onClick={(event) => setEmail(event.target.value)}
          />
          <label>Username</label>
          <input
            type="password"
            onClick={(event) => setPassword(event.target.value)}
          />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
