// importing React
import React from "react";
import { Link } from "react-router-dom";
// importing other components

// importing style sheet
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" placeholder="Enter Your Email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter Your Password..." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}
