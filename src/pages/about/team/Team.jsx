import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Team.css";

const Team = () => {
  return (
    <div>
      <>
        <div>
          <p className="fs-40 font-mali fw-500 text-center">Our team</p>
        </div>
        <div className="spacer" />
        <Swiper
          className="slider-team d-flex justify-content-center gap-3"
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          centerInsufficientSlides={true}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
        >
          <SwiperSlide className="team-track">
            <div className="team text-center d-flex flex-column gap-3">
              <div className="img-team">
                <img src="./assets/img/team-1.jpg" alt="dsd" />
              </div>
              <div className="name-team fs-24 fw-500">Peter Johnson</div>
              <div className="text-team fs">
                Having a vast and thorough practical working experience lasting.
              </div>
              <div className="list-icon-follow d-flex align-items-center justify-content-center">
                <div className="d-flex gap-3 align-content-center">
                  <i className="bi bi-facebook" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-google" />
                  <i className="bi bi-instagram" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="team-track">
            <div className="team text-center d-flex flex-column gap-3">
              <div className="img-team">
                <img src="./assets/img/team-2.jpg" alt="dsd" />
              </div>
              <div className="name-team fs-24 fw-500">Caroline Lopez</div>
              <div className="text-team">
                Having a vast and thorough practical working experience lasting.
              </div>
              <div className="list-icon-follow d-flex align-items-center justify-content-center">
                <div className="d-flex gap-3 align-content-center">
                  <i className="bi bi-facebook" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-google" />
                  <i className="bi bi-instagram" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="team-track">
            <div className="team text-center d-flex flex-column gap-3">
              <div className="img-team">
                <img src="./assets/img/team-3.jpg" alt="dsd" />
              </div>
              <div className="name-team fs-24 fw-500">Martin Wilson</div>
              <div className="text-team">
                Having a vast and thorough practical working experience lasting.
              </div>
              <div className="list-icon-follow d-flex align-items-center justify-content-center">
                <div className="d-flex gap-3 align-content-center">
                  <i className="bi bi-facebook" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-google" />
                  <i className="bi bi-instagram" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="team-track">
            <div className="team text-center d-flex flex-column gap-3">
              <div className="img-team">
                <img src="./assets/img/team-4.jpg" alt="dsd" />
              </div>
              <div className="name-team fs-24 fw-500">Peter Johnson</div>
              <div className="text-team">
                Having a vast and thorough practical working experience lasting.
              </div>
              <div className="list-icon-follow d-flex align-items-center justify-content-center">
                <div className="d-flex gap-3 align-content-center">
                  <i className="bi bi-facebook" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-google" />
                  <i className="bi bi-instagram" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="team-track">
            <div className="team text-center d-flex flex-column gap-3">
              <div className="img-team">
                <img src="./assets/img/team-5.jpg" alt="dsd" />
              </div>
              <div className="name-team fs-24 fw-500">Caroline Lopez</div>
              <div className="text-team">
                Having a vast and thorough practical working experience lasting.
              </div>
              <div className="list-icon-follow d-flex align-items-center justify-content-center">
                <div className="d-flex gap-3 align-content-center">
                  <i className="bi bi-facebook" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-google" />
                  <i className="bi bi-instagram" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination" />
        </Swiper>
      </>
    </div>
  );
};

export default Team;
