const router = require("express").Router();
const User = require("../../model/User.js");
const Post = require("../../model/Post.js");

router.get("/", async (req, res) => {
  try {
    const userData = await User.find();
    const postData = await Post.find();
    let maxViewPost = postData[0];
    let maxCommentsPost = postData[0];
    for (let object of postData) {
      maxViewPost = maxViewPost.views > object.views ? maxViewPost : object;
      maxCommentsPost =
        maxCommentsPost.comments.length > object.comments.length
          ? maxCommentsPost
          : object;
    }
    const statistics = {
      usersNumber: userData.length,
      postsNumber: postData.length,
      maxViewPost: maxViewPost,
      maxCommentsPost: maxCommentsPost,
    };
    res.status(200).send(statistics);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
