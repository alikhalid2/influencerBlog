import { Link } from "react-router-dom";
import "./post.css";
import React from "react";

export function getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }

export default function Post({img}) {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        {/* <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              sw
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              plc
            </Link>
          </span>
        </div> */}
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            ----------------------------
          </Link>
        </span>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">
        ----------------------------------------------------------------------
        --------------------------------------------------
        ----------------------------------------------------
      </p>
    </div>
  );
}