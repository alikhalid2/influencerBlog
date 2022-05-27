const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentsRoute = require("./routes/Comments");
const categoryRoute = require("./routes/categories");
const statisticsRoute = require("./routes/statistics");
const planRoute = require("./routes/plans");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use(
  "/api/images",
  express.static(path.join(__dirname, "../../Data/images"))
);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../Data/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

// statistics
const statistics = {};
const fetchStatistics = async () => {};

// upload
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/statistics", statisticsRoute);
app.use("/api/comments", commentsRoute);
app.use("/api/plans", planRoute);
app.listen("5000", () => {
  console.log("Backend is running.");
});
