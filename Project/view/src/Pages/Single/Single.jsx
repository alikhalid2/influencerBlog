// import React
import React from "react";

// import other components
import SideBar from "../../Components/SideBar/SideBar.jsx";
import SinglePost from "../../Components/SinglePost/SinglePost.jsx";

// import style file
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}
