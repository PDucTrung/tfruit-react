import React from "react";
import { NavLink } from "react-router-dom";
import "./ListVegetable.css";

const ListVegetable = () => {
  return (
    <div className="container">
      <div className="row gap-5 gap-lg-5 gap-xl-0">
        <div className="col-12 col-xl-6 col-xxl-6">
          <div
            className="big-img-product position-relative"
            data-aos="zoom-in-down"
            data-aos-delay={300}
          >
            <img className="img-big" src="./assets/img/iproduct-1.png" alt="" />
            <div className="position-absolute text-big-img position-relative">
              <img
                className="img-abs"
                src="./assets/img/iproduct-2.png"
                alt=""
              />
              <div className="title-pig-img text-center font-mali position-absolute">
                <p className="or">Organic</p>
                <p className="or2">vegetables</p>
              </div>
            </div>
          </div>
          <div
            className="d-none d-xl-block d-xxl-none"
            data-aos="zoom-in-down"
            data-aos-delay={300}
          >
            <img className="pr-1" src="./assets/img/pr-1.jpg" alt="" />
          </div>
        </div>
        <div className="col-12 col-xl-6 col-xxl-6">
          <div className="list-product d-flex gap-5 flex-wrap">
            <div
              className="product border-pink position-relative"
              data-aos="fade-down-right"
              data-aos-delay={200}
            >
              <NavLink
                className="text-decoration-none text-black"
                to={"/product-detail/1"}
              >
                <img
                  className="img-pr"
                  src="./assets/img/iproduct-3.png"
                  alt=""
                />
                <div className="title-product text-center">
                  <p>Red cabbage</p>
                </div>
                <div className="price-product text-center">
                  <p>
                    <span className="text-decoration-line-through text-orange-fo">
                      $ 4.00
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp; <span>$ 3.29</span>
                  </p>
                </div>
              </NavLink>
              <div className="add-cart position-absolute">
                <div className="button button-2">
                  <NavLink className="text-decoration-none" to={"/product"}>
                    SHOP NOW
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              className="product border-green position-relative"
              data-aos="fade-down-left"
              data-aos-delay={200}
            >
              <NavLink
                className="text-decoration-none text-black"
                to={"/product-detail/2"}
              >
                <img
                  className="img-pr"
                  src="./assets/img/iproduct-4.png"
                  alt=""
                />
                <div className="title-product text-center">
                  <p>Pea</p>
                </div>
                <div className="price-product text-center">
                  <p>
                    <span>$ 3.99</span>
                  </p>
                </div>
              </NavLink>
              <div className="add-cart position-absolute">
                <div className="button button-2">
                  <NavLink className="text-decoration-none" to={"/product"}>
                    SHOP NOW
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              className="product border-green position-relative"
              data-aos="fade-up-right"
              data-aos-delay={200}
            >
              <NavLink
                className="text-decoration-none text-black"
                to={"/product-detail/22"}
              >
                <img
                  className="img-pr"
                  src="./assets/img/iproduct-5.png"
                  alt=""
                />
                <div className="title-product text-center">
                  <p>Lettuce</p>
                </div>
                <div className="price-product text-center">
                  <p>
                    <span>$ 2.99</span>
                  </p>
                </div>
              </NavLink>
              <div className="add-cart position-absolute">
                <div className="button button-2">
                  <NavLink className="text-decoration-none" to={"/product"}>
                    SHOP NOW
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              className="product border-green position-relative"
              data-aos="fade-up-left"
              data-aos-delay={200}
            >
              <NavLink
                className="text-decoration-none text-black"
                to={"/product-detail/7"}
              >
                <img
                  className="img-pr"
                  src="./assets/img/iproduct-6.png"
                  alt=""
                />
                <div className="title-product text-center">
                  <p>Cucumber</p>
                </div>
                <div className="price-product text-center">
                  <p>
                    <span>$ 1.99</span>
                  </p>
                </div>
              </NavLink>
              <div className="add-cart position-absolute">
                <div className="button button-2">
                  <NavLink className="text-decoration-none" to={"/product"}>
                    SHOP NOW
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListVegetable;
