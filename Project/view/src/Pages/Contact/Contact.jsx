// importing React
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../Context/Context";

// importing other components

// importing style sheet
import "./contact.css";

export default function Contact() {
  const { user } = useContext(Context);
  if (user.planName === "premium") {
    return (
      <div>
        <h1 className="title">comment </h1>
        <div className="contact">
          <label>
            <textarea type="text" id="comment" name="comment"></textarea>
          </label>
          <button className="butsend">send</button>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
}
