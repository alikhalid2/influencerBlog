// importing React
import React, { useEffect, useState } from "react";

// importing other components
import Message from "../Message/Message.jsx";
import axios from "axios";
// importing style sheet
import "./messages.css";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [trigger, setTrigger] = useState("");
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("/messages");
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [trigger]);

  return (
    <div className="messages">
      {messages.map((message) => (
        <Message
          key={message._id}
          messageID={message._id}
          trigger={setTrigger}
        />
      ))}
    </div>
  );
}
