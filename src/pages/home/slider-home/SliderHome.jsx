import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderHome.css";
import { Autoplay, Navigation, Pagination } from "swiper";

const SliderHome = () => {
  return (
    <main>
      <Swiper
        className="slider-home"
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        slidesPerGroup={1}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide className="position-relative">
          <img src="./assets/img/slide-1.jpg" alt="" />
          <div className="info position-absolute">
            <div className="d-flex flex-column justify-content-center gap-5">
              <h3 className="font-mali text-gradient">Organic Food</h3>
              <h5 className="font-poppins">
                Tfruit provides local citizens and guests of our town with
                quality organic fruits, vegetables, and other products.
              </h5>
              <div className="btn-slider font-poppins">
                <a className="button button-2 text-decoration-none" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="position-relative">
          <img src="./assets/img/slide-2.jpg" alt="" />
          <div className="info position-absolute">
            <div className="d-flex flex-column justify-content-center gap-5">
              <h3 className="font-mali text-gradient">Quality Control</h3>
              <h5 className="font-poppins">
                We control the process of farming at Herber to deliver the best
                organic products to our customers throughout the state.
              </h5>
              <div className="btn-slider font-poppins">
                <a className="button button-2 text-decoration-none" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="position-relative">
          <img src="./assets/img/slide-6.jpg" alt="" />
          <div className="info position-absolute">
            <div className="d-flex flex-column justify-content-center gap-5">
              <h3 className="font-mali text-gradient">Eco-Friendly</h3>
              <h5 className="font-poppins">
                As the leading organic farm, we maintain an eco-friendly policy
                of growing and selling healthy food without any additives.
              </h5>
              <div className="btn-slider font-poppins">
                <a className="button button-2 text-decoration-none" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
        <div className="swiper-pagination" />
      </Swiper>
    </main>
  );
};

export default SliderHome;
