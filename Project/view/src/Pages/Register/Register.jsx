// importing React
import React from "react";
import { Link } from "react-router-dom";
// importing other components

// importing style sheet
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter Your Username..." />
        <label>Email</label>
        <input type="email" placeholder="Enter Your Email..." />
        <label>Password</label>
        <input type="password" placeholder="Enter Your Password..." />
        <label>Plan</label>
        <div className="registerPlan">
          <span>
            <label htmlFor="registerNormal">Normal</label>
            <input
              type="radio"
              name="registerPlan"
              id="registerNormal"
              value="normal"
            />
          </span>
          <span>
            <label htmlFor="registerPremium">Premium</label>
            <input
              type="radio"
              name="registerPlan"
              id="registerPremium"
              value="Premium"
            />
          </span>
        </div>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
}
