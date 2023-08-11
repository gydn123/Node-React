const searchList = require("../../Model/SearchList/SearchList");

exports.getSearchList = (req, res) => {
  const keyword = req.params.keyword;
  searchList
    .aggregate([
      {
        $unwind: "$store", // 'store' 배열의 요소들을 분리.
      },
      {
        $project: {
          _id: 0,
          "store.storeInfo": 1, // 'storeInfo' 필드만 출력.
        },
      },
    ])
    .then((results) => {
      // console.log(results[0]["store"]["storeInfo"]['tag']);
      // console.log(results.length);

      // 검색값을 포함하는 index 저장 배열
      const trueIndexArray = [];

      //검색값 매칭 시작
      for (let i = 0; i < results.length; i++) {
        // 가게정보 하나의 tag 정보
        const tagArray = results[i]["store"]["storeInfo"]["tag"];

        // tag를 검색해 검색값과 일치하는 것이 있으면 true 반환
        const isKeywordIncluded = tagArray.some((tag) => {
          for (let key in tag) {
            const value = tag[key];
            if (typeof value === "string" && value.includes(keyword)) {
              return true;
            }
          }
          return false;
        });

        // 검색한 값이 있으면 해당 index 배열에 저장
        if (isKeywordIncluded) {
          trueIndexArray.push(i);
        }
      }

      // 일치하는 값이 없을시 반환
      if (trueIndexArray.length === 0) {
        console.log("여기로 왔엉");
        res
          .status(200)
          .json({ message: "검색한 값의 결과는 존재하지 않습니다." });
      }

      /*
        검색값 비교처리 끝
      */

      /*
        정보 추출 시작
      */
      console.log(trueIndexArray);

      const responseSearchList = [];

      for (array of trueIndexArray) {
        const storeInfoArray = results[array]["store"]["storeInfo"];
        const commentArray = storeInfoArray["comment"]["list"];
        // 가게이름
        const storename = {
          storename : storeInfoArray["basicInfo"]["placenamefull"],
        };
        // 가게 위치
        const storeLocation = {
          storeLocation : storeInfoArray["tag"][3]["name3"],
        };
        // 가게 대표음식
        const storeRecommendFood = {
          storeRecommendFood : storeInfoArray["tag"][1]["category_name"],
        };
        const visit = { 'visit' : storeInfoArray["basicInfo"]["visit"] }; // 방문수
        const favorite = {'favorite' : storeInfoArray["basicInfo"]["favorite"]}; // 가고싶어요

        let pointSum = 0;
        let count = 0;
        for (let points of commentArray) {
          const point = points["point"];
          if (point !== "") {
            count += 1;
            pointSum += point;
          }
        }
        pointAVG = {'point' : pointSum / count};

        // const commentPointAVG = storeInfoArray.foreach((commentArray) => {});

        // console.log(storeLocation);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
