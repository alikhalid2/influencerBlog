// importing react
import React, { useEffect, useState } from "react";

// importing axios
import axios from "axios";

// importing other components
import Header from "../../Components/Header/Header.jsx";
import Posts from "../../Components/Posts/Posts.jsx";
import SideBar from "../../Components/SideBar/SideBar.jsx";

//importing styling
import "./home.css";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { search } = useLocation();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </React.Fragment>
  );
}
