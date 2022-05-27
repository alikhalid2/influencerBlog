const mongoose = require("mongoose");

const PlanSchema = mongoose.Schema(
  {
    planName: {
      type: String,
      required: true,
      unique: false,
    },
    postAllow: {
      type: Boolean,
      required: true,
      unique: false,
      default: false,
    },
    postNumber: {
      type: Number,
      required: true,
      unique: false,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plan", PlanSchema);
