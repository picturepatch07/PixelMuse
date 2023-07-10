import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// app.use("/api/v1/post", require("./routes/postRoutes.js"));
// app.use("/api/v1/dalle", require("./routes/dalleRoutes.js"));

app.get("/", async (req, res) => {
  res.send("Hello World");
});

const startServer = async () => {
  app.listen(8080, () =>
    console.log("Server has started on port http://localhost:8080")
  );
};

startServer();
