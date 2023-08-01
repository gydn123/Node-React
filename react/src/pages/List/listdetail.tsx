import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./listdetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

interface ListDetailProps {
  images: string[];
}

function ListDetail({ images }: ListDetailProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <aside className="restaurant-photo">
      <div>
        <div>
          <figure className="list-photo">
            <figure className="restaurant-photo-items" onClick={handleOpenModal}>
              <img src={images[currentImageIndex]} alt="" />
            </figure>
          </figure>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <div className="modal">
          <div className="modal-content">
          <button className="left-button" onClick={handlePrevImage}><i className="bi bi-chevron-left"></i></button>
          <div className="modal-image">
          <img src={images[currentImageIndex]} alt="" />
          </div>
          <button className="right-button" onClick={handleNextImage}><i className="bi bi-chevron-right"></i></button>
        <button className="modal-close" onClick={handleCloseModal}><i className="bi bi-x-lg"></i></button>
          </div>
        </div>
      </Modal>
    </aside>
    <div className="column-contents">
        <div className="inner">
          {/* 레스토랑 상세 정보 */}
          <section className="restaurant-detail">
            <header>
              <div className="restaurant_title_wrap">
                <span className="title">
                  <h1 className="restaurant_name">돌산식당</h1>
                  <strong className="rate-point expected">
                    <span>4.5</span>
                  </strong>
                </span>
                {/* 리뷰쓰기 버튼과 위시리스트 버튼 */}
                <button className="review-btn">리뷰쓰기</button>
                <button className="wishlist-btn">위시리스트</button>
              </div>
              {/* 방문횟수, 리뷰횟수, 위시리스트 횟수 */}
              <p className="visit-count">방문횟수: 100</p>
              <p className="review-count">리뷰횟수: 50</p>
              <p className="wishlist-count">위시리스트: 20</p>
            </header>

            {/* 주소, 전화번호, 음식정보, 가격대, 영업시간, 휴일 */}
            <div className="restaurant-info">
              <div>
                <p>주소: 서울시 강남구</p>
                <p>전화번호: 02-123-4567</p>
                <p>음식정보: 한식</p>
                <p>가격대: ₩₩</p>
                <p>영업시간: 10:00 AM - 10:00 PM</p>
                <p>휴일: 매주 일요일</p>
              </div>
              {/* 더 많은 정보들 */}
              {/* 추가적인 정보들을 이곳에 넣어주세요 */}
            </div>
          </section>
          <hr />
          {/* 리뷰들을 보여줄 부분 */}
          <section className="reviews">
            {/* 리뷰들을 여기에 표시해주세요 */}
            리뷰
          </section>
        </div>
        <div className="column-side">
          {/* 가게 위치 지도 */}
          <div className="map">가게 위치 지도가 나타날 부분입니다.</div>

          {/* 가게 추천 공간 */}
          <div className="recommended-stores">
            <h2>이 근처 가게 추천</h2>
            {/* 여기에 가게 추천 정보를 추가할 수 있습니다 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListDetail;