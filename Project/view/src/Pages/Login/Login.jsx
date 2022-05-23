// importing React
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// importing other components
import { loginStart, loginFailure, loginSuccess } from "../../Context/Actions";
import { Context } from "../../Context/Context";
// importing style sheet
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loginFetching = async () => {};
    loginFetching();
  });
  const submitHandler = async (event) => {
    setError(false);
    event.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      setError(true);
      dispatch(loginFailure());
    }
  };
  console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Your Username..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password..."
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="loginButton" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
      {error && <span className="loginError">Login Failed!!!</span>}
    </div>
  );
}
