// importing React
import React from "react";

// importing other components
import Massage from"../Massage/Massage.jsx";
// importing style sheet
import "./messages.css";

export default function Messages() {
  return( 
  <div className="messages">
    <Massage/>
    <Massage/>
    <Massage/>
    <Massage/>
    <Massage/>
    <Massage/>
  </div>
  );
}
