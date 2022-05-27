// importing React
import axios from "axios";
import React, { useEffect, useState } from "react";

// importing other components

// importing style sheet
import "./message.css";

export default function Message({ messageID, trigger }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await axios.get("/messages/" + messageID);
        setMessage(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage();
  }, []);

  const handleDelete = async () => {
    try {
      axios.delete("/messages/" + messageID);
      trigger(messageID);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="message">
      <div className="detals">
        {message && (
          <img
            className="massageimg"
            src={"/images/" + message.profilePic}
            alt="img"
            width="100px"
            height="100px"
            onError={(event) => (event.target.src = "/default.jpeg")}
          />
        )}
        <p className="massagename">{message && message.username}</p>
        <i
          onClick={handleDelete}
          className="singlePostIcon fa-regular fa-trash-can icondelet"
        ></i>
      </div>
      <p className="text">{message && message.content}</p>
    </div>
  );
}
