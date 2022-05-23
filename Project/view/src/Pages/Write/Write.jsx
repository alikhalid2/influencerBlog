// importing React
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import other components
import { Context } from "../../Context/Context";
import axios from "axios";
// import style sheet
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      userID: user._id,
      title: title,
      desc: desc,
    };
    if (file) {
      const data = new FormData();
      console.log(file);
      const filename = Date.now() + file.name.replace(/ /g, "");
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post("/posts", newPost);
      navigate("/");
    } catch (error) {
      alert("please add title / description!!!");
    }
  };
  return (
    <div className="write">
      {file && (
        <img
          className="writeImage"
          src={URL.createObjectURL(file)}
          alt="write"
          height="250px"
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={(event) => setFile(event.target.files[0])}
            hidden
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(event) => setDesc(event.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
