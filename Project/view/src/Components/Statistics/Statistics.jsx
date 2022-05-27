// importing React
import React, { useEffect, useState } from "react";

// importing other components
import Post from "../Post/Post.jsx";
import axios from "axios";

// importing style sheet
import "./statistics.css";

export default function Statistics() {
  const [statistics, setStatistics] = useState({
    usersNumber: 0,
    postsNumber: 0,
    maxViewPost: {},
    maxCommentsPost: {},
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const res = await axios.get("/statistics");
        setStatistics(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStatistics();
  });
  return (
    <div className="statistics">
      <div className="statisticsItem">
        <h2 className="statisticsItemTitle">Page Statistics</h2>
        <div className="statisticsItemContainer">
          <span className="statisticsItemInfo">
            The Number of Users =
            <span className="statisticsItemInfoNumber">
              {statistics.usersNumber}
            </span>
          </span>
          <span className="statisticsItemInfo">
            The Number of Posts =
            <span className="statisticsItemInfoNumber">
              {statistics.postsNumber}
            </span>
          </span>
        </div>
      </div>
      <div className="statisticsContainer">
        <div className="statisticsItem">
          <h2>Highest View Post</h2>
          <Post post={statistics.maxViewPost} />
        </div>
        <div className="statisticsItem">
          <h2>Highest Comment Post</h2>
          <Post post={statistics.maxCommentsPost} />
        </div>
      </div>
    </div>
  );
}
