// importing React
import React from "react";

// importing other components

// importing style sheet
import "./massage.css";

export default function Massage() {
  return ( 
      <div className="massage">
          <div className="detals">
          <img
          className="massageimg"
          src="default.jpeg"
          alt="img"
          width="100px"
          height="100px"
        />
        <p className="massagename">username</p>
        <i
        // onClick={handleDelete}
        className="singlePostIcon fa-regular fa-trash-can icondelet"
      ></i>
        </div>
        <p className="text">
           this is massage from user,this is massage from user
           ,this is massage from user
           
          
        </p>
       
      </div>
   );
}

  