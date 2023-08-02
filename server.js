const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // React 앱의 주소
  })
);

mongoose.connect("mongodb://localhost:27017/matzip", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// 데이터 모델 정의
const matzipSchema = new mongoose.Schema({
  _id: Object,
  placename: String,
  address: String,
  category: String,
  images: String,
});

// 테이블(컬렉션) 가져오기
const Matzip = mongoose.model("matzip", matzipSchema);

app.get("/api/data", async (req, res) => {
  try {
    const data = await Matzip.find(
      {},
      { _id: 1, placename: 1, address: 1, category: 1, images: 1 }
    );
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.use(express.static(path.join(__dirname, "react/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/react/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/react/build/index.html"));
});

app.listen(8080, function () {
  console.log("listening on 8080");
});
