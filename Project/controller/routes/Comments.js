const router = require("express").Router();
const Comment = require("../../model/Comment");
const Post = require("../../model/Post");
const User = require("../../model/User");

// get specific comment
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    const user = await User.findById(comment.userID);
    const { userID, ...responce } = {
      username: user.username,
      profilePic: user.profilePic,
      ...comment,
    };
    res.status(200).json(responce);
  } catch (error) {
    res.status(400).json(error);
  }
});

// post a new comment
router.post("/", async (req, res) => {
  const newComment = new Comment({
    userID: req.body.userID,
    content: req.body.content,
  });
  try {
    const comment = await newComment.save();
    const post = await Post.findById(req.body.postID);
    try {
      post.comments.push(comment._id);
    } catch {
      post.comments = [comment._id];
    }
    const updatedPost = await Post.findByIdAndUpdate(req.body.postID, {
      $set: post,
    });
    res.status(200).json({ comment, post: updatedPost });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
