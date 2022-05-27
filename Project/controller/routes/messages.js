const router = require("express").Router();
const Message = require("../../model/Message");
const User = require("../../model/User");

// get specific comment
router.get("/:id", async (req, res) => {
  const messageID = req.params.id;
  if (messageID) {
    try {
      const message = await Message.findById(messageID);
      const user = await User.findById(message.userID);
      const { userID, ...responce } = {
        username: user.username,
        profilePic: user.profilePic,
        ...message._doc,
      };
      res.status(200).json(responce);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    try {
      const messages = await Message.find().select("_id");
      res.status(200).json(messages);
    } catch (error) {
      res.status(400).json(error);
    }
  }
});

// post a new comment
router.post("/", async (req, res) => {
  const newMessage = new Message({
    userID: req.body.userID,
    content: req.body.content,
  });
  try {
    const message = await newMessage.save();
    res.status(200).json(message);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
