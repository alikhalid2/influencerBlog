// importing React
import React, { useContext, useState } from "react";

// importing other components
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import axios from "axios";

// importing style sheet
import "./contact.css";

export default function Contact() {
  const { user } = useContext(Context);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSend = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/messages", { userID: user._id, content: message });
      alert("Your Message Has Sent successfully!!!");
      navigate("/");
    } catch (error) {
      alert("Sorry, We Can't Send Your Message Now!!! Please Try Later.");
      console.log(error);
    }
  };
  if (user.planName === "premium") {
    return (
      <div className="contact">
        <h1 className="contactTitle">Send us a message</h1>
        <div className="contactContent">
          <label>
            <textarea
              type="text"
              className="contactMessage"
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
          </label>
          <button className="contactButton" onClick={handleSend}>
            send
          </button>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
}
