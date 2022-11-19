import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Patner.css";

const Patner = () => {
  return (
    <div className="container">
      <div className="partners">
        <Swiper
          className="slider-partners"
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
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className="partner">
            <img src="./assets/img/partner-1.png" alt="cx" />
          </SwiperSlide>
          <SwiperSlide className="partner">
            <img src="./assets/img/partner2.png" alt="xc" />
          </SwiperSlide>
          <SwiperSlide className="partner">
            <img src="./assets/img/partner3.png" alt="cx" />
          </SwiperSlide>
          <SwiperSlide className="partner">
            <img src="./assets/img/partner4.png" alt="cx" />
          </SwiperSlide>
          <SwiperSlide className="partner">
            <img src="./assets/img/partner3.png" alt="xc" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Patner;
