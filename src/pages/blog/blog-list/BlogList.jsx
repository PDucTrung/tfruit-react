import React from "react";
import "./BlogList.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

const BlogList = () => {
  return (
    <div className="container">
      <Swiper
        className="slider-list-blog"
        loop={true}
        speed={1000}
        slidesPerView={1}
        slidesPerGroup={1}
        modules={[Pagination]}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
      >
        <SwiperSlide className="list-blog d-flex justify-content-center flex-wrap align-items-center gap-5">
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-1.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-1.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>All About Pudding</NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">1</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-2.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Kate Williams
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-2.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>Health Benefits of Food</NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">2</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-3.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Peter McMillan
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-3.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>How to Start a Food Blog</NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">3</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-1.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-4.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>Start your organic journey</NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">4</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-2.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-5.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>How to Start a Food Blog</NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">5</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-3.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-6.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>Why choose Tfruit</NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">6</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="list-blog d-flex justify-content-center flex-wrap align-items-center gap-5">
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-1.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-6.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Why Organic Farming Keeps Getting Popular Globally
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">7</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-2.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Kate Williams
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-5.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Everyday Dinner Choices for a Healthier, Happier You
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">8</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-3.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Peter McMillan
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-4.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Standardizing the Organic Industry in the USA
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">9</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-1.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-3.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Why Organic Farming Keeps Getting Popular Globally
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">10</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-2.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-2.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Why Organic Farming Keeps Getting Popular Globally
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">11</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-3.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-1.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Why Organic Farming Keeps Getting Popular Globally
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">12</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="list-blog d-flex justify-content-center flex-wrap align-items-center gap-5">
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-1.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-6.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Why Organic Farming Keeps Getting Popular Globally
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">13</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-2.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Kate Williams
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-4.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Everyday Dinner Choices for a Healthier, Happier You
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">14</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-3.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Peter McMillan
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-2.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Standardizing the Organic Industry in the USA
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">15</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-1.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-5.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Why Organic Farming Keeps Getting Popular Globally
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">16</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-2.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-3.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Why Organic Farming Keeps Getting Popular Globally
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">17</div>
          </div>
          <div className="blog-box d-flex flex-column gap-2 align-content-center justify-content-center position-relative">
            <div className="user-up-box d-flex align-items-center justify-content-between">
              <div className="name-person-up-blog d-flex gap-2 align-items-center">
                <div className="img-thumbnail-user">
                  <img src="./assets/img/i-user-up-3.jpg" alt="ss" />
                </div>
                <div className="name-per-up">
                  <span className="text-gray-fo">by</span> Ann Smith
                </div>
              </div>
              <div className="time-up-blog text-orange-fo">May 17, 2018</div>
            </div>
            <div className="img-thumbnail-blog-box">
              <img src="./assets/img/blog-1.jpg" alt="ds" />
            </div>
            <div className="name-blog-box fs-20 fw-400 text-green">
              <NavLink to={"/blog-detail"}>
                Why Organic Farming Keeps Getting Popular Globally
              </NavLink>
            </div>
            <div className="number-blog position-absolute fs-24">18</div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default BlogList;
