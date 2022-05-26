// importing React
import React, { useState } from "react";

// importing other components
import Users from "../../Components/Users/Users.jsx";
import Statistics from "../../Components/Statistics/Statistics.jsx";
import Messages from "../../Components/Messages/Messages.jsx";
// importing style sheet
import "./admin.css";

export default function Admin() {
  const [choice, setChoice] = useState("USERS");
  return (
    <div className="admin">
      <div className="adminSidebar">
        <p onClick={() => setChoice("STATISTICS")}>STATISTICS</p>
        <p onClick={() => setChoice("USERS")}>USERS</p>
        <p onClick={() => setChoice("MESSAGES")}>MESSAGES</p>
      </div>
      {choice === "STATISTICS" ? (
        <Statistics />
      ) : choice === "USERS" ? (
        <Users />
      ) : (
        <Messages />
      )}
    </div>
  );
}
