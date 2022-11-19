import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./History.css";

const History = () => {
  return (
    <div>
      <p className="text-center font-mali fs-40 fw-500">Our History</p>
      <Swiper
        className="slider-history"
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        centerInsufficientSlides={true}
        modules={[Autoplay]}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1450: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="history d-flex flex-column align-items-center align-content-center gap-3 position-relative">
          <img src="./assets/img/about-2.png" alt="dsd" />
          <div>Farm Establishment</div>
          <div className="line-2" />
          <div>2000</div>
          <div className="dots-history position-absolute green" />
        </SwiperSlide>
        <SwiperSlide className="history d-flex flex-column align-items-center align-content-center gap-3 position-relative">
          <img src="./assets/img/about-3.png" alt="dsd" />
          <div>Partnering with Food Stores</div>
          <div className="line-2" />
          <div>2005</div>
          <div className="dots-history position-absolute green" />
        </SwiperSlide>
        <SwiperSlide className="history d-flex flex-column align-items-center align-content-center gap-3 position-relative">
          <img src="./assets/img/about-4.png" alt="dsd" />
          <div>Introducing Farming Innovations</div>
          <div className="line-2" />
          <div>2010</div>
          <div className="dots-history position-absolute green" />
        </SwiperSlide>
        <SwiperSlide className="history d-flex flex-column align-items-center align-content-center gap-3 position-relative">
          <img src="./assets/img/about-5.png" alt="dsd" />
          <div>Farm Establishment</div>
          <div className="line-2" />
          <div>2015</div>
          <div className="dots-history position-absolute green" />
        </SwiperSlide>
        <SwiperSlide className="history d-flex flex-column align-items-center align-content-center gap-3 position-relative">
          <img src="./assets/img/about-2.png" alt="dsd" />
          <div>Farm Establishment</div>
          <div className="line-2" />
          <div>2000</div>
          <div className="dots-history position-absolute green" />
        </SwiperSlide>
        <SwiperSlide className="history d-flex flex-column align-items-center align-content-center gap-3 position-relative">
          <img src="./assets/img/about-3.png" alt="dsd" />
          <div>Partnering with Food Stores</div>
          <div className="line-2" />
          <div>2005</div>
          <div className="dots-history position-absolute green" />
        </SwiperSlide>
        <SwiperSlide className="history d-flex flex-column align-items-center align-content-center gap-3 position-relative">
          <img src="./assets/img/about-4.png" alt="dsd" />
          <div>Introducing Farming Innovations</div>
          <div className="line-2" />
          <div>2010</div>
          <div className="dots-history position-absolute green" />
        </SwiperSlide>
        <SwiperSlide className="history d-flex flex-column align-items-center align-content-center gap-3 position-relative">
          <img src="./assets/img/about-5.png" alt="dsd" />
          <div>Farm Establishment</div>
          <div className="line-2" />
          <div>2015</div>
          <div className="dots-history position-absolute green" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default History;
