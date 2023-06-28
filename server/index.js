const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/dbConnections");

connectDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/post", require("./routes/postRoutes.js"));
app.use("/api/dalle", require("./routes/dalleRoutes.js"));

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});