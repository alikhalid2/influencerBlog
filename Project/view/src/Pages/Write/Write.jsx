// import React
import React from "react";

// import other components

// import style sheet
import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImage"
        src="https://images.pexels.com/photos/887353/pexels-photo-887353.jpeg?cs=srgb&dl=pexels-designecologist-887353.jpg&fm=jpg"
        alt="write"
        height="250px"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" hidden />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus="true"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
