// importing React
import React from "react";

// importing other components
import Users from "../../Components/Users/Users.jsx";
import Statistics from "../../Components/Statistics/Statistics.jsx";
import Messages from "../../Components/Messages/Messages.jsx";
import { Link, useLocation } from "react-router-dom";
// importing style sheet
import "./admin.css";

export default function Admin() {
  const choice = useLocation().search.split("=")[1];
  return (
    <div className="admin">
      <div className="adminSidebar">
        <Link to="/admin?choice=statistics" className="link">
          <p
            className={
              choice === "statistics" ? "adminSelect" : "adminNotSelected"
            }
          >
            STATISTICS
          </p>
        </Link>
        <Link to="/admin?choice=users" className="link">
          <p
            className={choice === "users" ? "adminSelect" : "adminNotSelected"}
          >
            USERS
          </p>
        </Link>
        <Link to="/admin?choice=messeges" className="link">
          <p
            className={
              choice === "messeges" ? "adminSelect" : "adminNotSelected"
            }
          >
            MESSAGES
          </p>
        </Link>
      </div>
      {choice === "statistics" ? (
        <Statistics />
      ) : choice === "users" ? (
        <Users />
      ) : (
        <Messages />
      )}
    </div>
  );
}
