const router = require("express").Router();
const User = require("../../model/User");
const Post = require("../../model/Post");
const bcrypt = require("bcrypt");
const Plan = require("../../model/Plan");

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const user = updatedUser._doc;
      const plan = await Plan.findById(user.planID);
      res.status(200).json({ ...user, ...plan._doc, _id: user._id });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ userID: user._id });
        await Plan.findByIdAndDelete(user.planID);
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const plan = await Plan.findById(user.postID);
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, ...plan, _id: others._id });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
