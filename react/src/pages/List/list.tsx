import React from "react";
import { Link } from "react-router-dom";
import "./list.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
function List() {
  return (
    <div className="container">
      <header className="basic-info-list">
        <p className="status">오늘날짜: 2023-07-28</p>
        <h1 className="title">샐러드 맛집 베스트 40곳</h1>
        <h2 className="subtitle">“입맛 없을 때 샐러드로 가볍게!”</h2>
      </header>
      <main className="container custom-main-padding border-bottom">
        <div className="place-list">
          <div className="place-item">
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/1035497_1669815478237252.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"
              alt="가게1"
            />
            <div className="place-info">
              <div className="place-info-header">
                <h2>가게1 이름</h2>
                <div className="ratings">평점: 4.5</div>
              </div>
              <p>가게1 주소</p>
            </div>

            <div className="buttons">
              <button className="btn btn-light">
                <span className="bi bi-star"></span>{" "}
              </button>
              <p>가고싶다</p>
              <button>
                <Link to={`/listdetail`}>가게 자세히 보기</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default List;
