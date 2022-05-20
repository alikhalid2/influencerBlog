// importing React
import React from "react";

// importing other components
import SideBar from "../../Components/SideBar/SideBar.jsx";

// importing style sheet
import "./settings.css";

export default function Settings() {
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
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
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
          <input type="text" placeholder="Elkfafy" />
          <label>Email</label>
          <input type="email" placeholder="elkfafy@gmail.com" />
          <label>Username</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
