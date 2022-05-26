// importing React
import React from "react";

// importing other components

// importing style sheet
import "./contact.css";

export default function Contact() {
  return (
      <div>
           <h1 className="title">comment </h1>
      <div className="contact">
         
          <label >
              <textarea type="text" id="comment" name="comment"></textarea>
          </label>
          <button className="butsend">send</button>
      </div>
    
      </div>
   );
}