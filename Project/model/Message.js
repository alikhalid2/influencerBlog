const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Message", MessageSchema);
