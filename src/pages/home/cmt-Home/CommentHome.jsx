import React from "react";
import "./CommentHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";

const CommentHome = () => {
  return (
    <div className="cmt-home position-relative">
      <p className="font-mali tittle-cmt text-center position-absolute">
        Customers
      </p>
      <img className="img-cmt" src="./assets/img/i-cmthome.png" alt="dsd" />
      <Swiper
        className="section-slider-cmt-home position-absolute bg-white"
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        slidesPerGroup={1}
        slidesPerView={1}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
      >
        <SwiperSlide className="box-cmt text-center font-poppins d-flex flex-column gap-0 align-items-center gap-sm-3 gap-lg-4">
          <img src="./assets/img/user-1.jpg" alt="ss" />
          <p className="text-cmthome-1">
            <i className="bi bi-brush" /> I wanted to tell you how amazing it
            was to see the farm and how much we love the food. Your apples and
            carrots are just wonderful and their taste is great.
          </p>
          <div className="d-flex flex-column gap-1">
            <span className="text-cmthome-2">John Wilson</span>
            <span className="text-cmthome-3">Regular Client</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="box-cmt text-center font-poppins d-flex flex-column gap-0 align-items-center gap-sm-3 gap-lg-4">
          <img src="./assets/img/user-2.jpg" alt="ss" />
          <p className="text-cmthome-1">
            <i className="bi bi-brush" /> The food from your farm is wonderful.
            So many nights when we sit down to dinner we can say everything on
            this plate is locally grown and delicious. Thank you!
          </p>
          <div className="d-flex flex-column gap-1">
            <span className="text-cmthome-2">Kate Anderson</span>
            <span className="text-cmthome-3">Regular Client</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="box-cmt text-center font-poppins d-flex flex-column gap-0 align-items-center gap-sm-3 gap-lg-4">
          <img src="./assets/img/user-3.jpg" alt="ss" />
          <p className="text-cmthome-1">
            <i className="bi bi-brush" /> I picked up a head of your lettuce at
            a local grocery store today. What an amazing and beautiful lettuce
            it is! I’ve never seen another so full and green and tempting.
          </p>
          <div className="d-flex flex-column gap-1">
            <span className="text-cmthome-2">Samantha Peterson</span>
            <span className="text-cmthome-3">Regular Client</span>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default CommentHome;
