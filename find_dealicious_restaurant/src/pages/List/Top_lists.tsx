import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Top_lists.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

interface TrustBestItem {
  src: string;
  alt: string;
  titleText: string;
  content: string;
  url: string;
}
const Top_lists: React.FC = () => {
  const [useTrustBestData, setUseTrustBestData] = useState<TrustBestItem[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryValue = queryParams.get("type"); // 쿼리스트링의 "type" 파라미터 추출
  console.log(queryValue + "queryValue@@@");
  useEffect(() => {
    if (queryValue) {
      getTrustBest(queryValue);
      console.log(queryValue + "@@queryValue@@@이펙트");
    }
  }, [queryValue]);

  const getTrustBest = async (queryValue: string) => {
    try {
      const response = await fetch(
        `http://localhost:4500/trustBest/type=${queryValue}`
      );
      console.log(queryValue + "@@queryValue@@@페치");
      if (!response.ok) {
        const errorData = await response.json();
        const statusCode = response.status;
        const statusText = response.statusText;
        const message = errorData.message[0];
        console.log(`${statusCode} - ${statusText} - ${message}`);
        return;
      }
      const data = await response.json();
      setUseTrustBestData(data);
    } catch (err) {
      console.log("error log: ", err);
    }
  };

  return (
    <>
      {/* <Route path="/menubar" element={<Menubar />} /> */}
      {useTrustBestData.map((item, index) => (
        <div className="container">
          <header className="basic-info-list">
            {/* 클릭횟수 날짜 넣을부분 */}
            <p className="status">1111클릭 | 2023-08-2 </p>
            {/*  */}
            <h1 className="title">{item.titleText}</h1>
            <h4 className="subtitle">{item.content}</h4>
          </header>
          <main className="container-place">
            <tr>
              <td>
                <div className="place-list">
                  <div className="place-item">
                    <img src={item.src} alt={item.alt} />
                    <div className="place-info">
                      <div className="place-info-header">
                        <span className="title">
                          <h1 className="restaurant_name">돌산식당</h1>
                          <strong className="rate-point expected">
                            <span>4.5</span>
                          </strong>
                        </span>
                      </div>
                      <p>가게1 주소</p>
                    </div>

                    <div className="buttons">
                      <button className="wishlist-btn">
                        <i className="bi bi-star"></i>
                        <span className="wishlist-btn-txt">가고싶다</span>
                      </button>
                      <button className="viewdetail">
                        <p className="viewdetail-p">
                          <Link to={`/listdetail`}>가게 자세히 보기</Link>
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </main>
        </div>
      ))}
    </>
  );
};

export default Top_lists;
