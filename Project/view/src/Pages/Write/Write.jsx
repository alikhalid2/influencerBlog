// importing React
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
// import other components
import { Context } from "../../Context/Context";
import axios from "axios";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../../Context/Actions";
// import style sheet
import "./write.css";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [choice, setChoice] = useState(false);
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const haveChance = async () => {
      try {
        const res = await axios.put("/plans/reset/" + user.planID);
        if (res.data && Object.keys(res.data).length > 0) {
          setChoice(true);
        }
        setChoice(false);
      } catch (error) {
        console.log(error);
      }
    };
    haveChance();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      userID: user._id,
      title: title,
      desc: desc,
    };
    if (file) {
      const data = new FormData();
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
      if (user.planName === "premium") {
        try {
          const planData = await axios.put("/plans/decrease/" + user.planID);
          const { _id, _createdAt, updatedAt, ...plan } = planData.data;

          dispatch(updateStart());
          const newUser = { ...user, postNumber: plan.postNumber };
          dispatch(updateSuccess(newUser));
        } catch (error) {
          console.log(error);
          dispatch(updateFailure());
        }
      }
      navigate("/");
    } catch (error) {
      alert("please add title / description!!!");
    }
  };
  if (
    user &&
    (user.planName === "admin" ||
      (user.planName === "premium" && (user.postNumber > 0 || choice)))
  ) {
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
  } else {
    alert("You Don't Have Authorization to This Page.");

    return <Navigate to="/" />;
  }
}
