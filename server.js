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

mongoose.connect(
  "mongodb+srv://Crescent:kCUnTEfeJaUq1Da4@cluster0.knnf2pw.mongodb.net/DealiciousFood",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// 데이터 모델 정의
const trustBestSchema = new mongoose.Schema({
  trustBest: [
    {
      src: String,
      alt: String,
      titleText: String,
      content: String,
      url: String,
    },
  ],
});

// 테이블(컬렉션) 가져오기
const DealiciousFood = mongoose.model(
  "DealiciousFood",
  trustBestSchema,
  "DealiciousFood"
);

// 데이터를 가져오는 핸들러
app.get("/api/data/trustBest", async (req, res) => {
  try {
    const data = await DealiciousFood.aggregate([
      // $unwind를 사용하여 trustBest 배열의 요소를 풀어줍니다.
      { $unwind: "$trustBest" },

      // $project를 사용하여 필요한 필드들만 선택합니다.
      {
        $project: {
          _id: 1,
          src: "$trustBest.src",
          alt: "$trustBest.alt",
          titleText: "$trustBest.titleText",
          content: "$trustBest.content",
          url: "$trustBest.url",
        },
      },
    ]);

    res.json(data);
    console.log(data);
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
