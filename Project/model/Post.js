const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    userID: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    comments: {
      type: Array,
      required: false,
      default: [],
    },
    views: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
