const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    prompt: {
      type: String,
      required: [true, "Please enter a prompt"],
    },
    photo: {
      type: String,
      required: [true, "Please upload a photo"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
