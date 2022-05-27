import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Context/Actions";
import { Context } from "../../Context/Context";
import axios from "axios";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
  };
  const haveChance = async () => {
    try {
      const res = await axios.put("/plans/reset/" + user.planID);
      if (res.data && Object.keys(res.data).length > 0) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };
  const handleWrite = async () => {
    if (user.planName === "admin") {
      navigate("/write");
    } else if (user.planName === "premium") {
      if (user.postNumber > 0 || (await haveChance())) {
        navigate("/write");
      } else {
        alert("You Writed 2 posts already!!!");
      }
    }
  };
  return (
    <React.Fragment>
      <header className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook-square"></i>
          <i className="topIcon fa-brands fa-twitter-square"></i>
          <i className="topIcon fa-brands fa-pinterest-square"></i>
          <i className="topIcon fa-brands fa-instagram-square"></i>
          <i className="topIcon fa-brands fa-github-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            {user && user.planName === "premium" && (
              <li className="topListItem">
                <Link to="/contact" className="link">
                  CONTACT
                </Link>
              </li>
            )}
            {user &&
              (user.planName === "admin" || user.planName === "premium") && (
                <li className="topListItem" onClick={handleWrite}>
                  WRITE
                </li>
              )}
            {user && user.planName === "admin" && (
              <li className="topListItem">
                <Link to="/admin" className="link">
                  ADMIN
                </Link>
              </li>
            )}
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link to="/settings" className="link">
              <img
                className="topImg"
                src={"/images/" + user.profilePic}
                alt="personal"
                onError={(event) => (event.target.src = "default.jpeg")}
                width="40px"
                height="40px"
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login" className="link">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}

          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </header>
    </React.Fragment>
  );
}
