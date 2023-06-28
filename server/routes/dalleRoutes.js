const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const router = require("express").Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

router.route("/").post(async (req, res) => {
  const prompt = req.body;
  try {
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(error?.response.data.error.message || "Something went wrong");
  }
});

module.exports = router;
