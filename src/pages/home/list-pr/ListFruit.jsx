import React from "react";
import { NavLink } from "react-router-dom";
import "./ListVegetable.css";

const ListFruit = () => {
  return (
    <div className="container">
      <div className="row gap-5 gap-lg-5 gap-xl-0">
        <div className="col-12 col-xl-6 col-xxl-6 order-2">
          <div
            className="big-img-product position-relative"
          >
            <img className="img-big" src="./assets/img/iproduct-7.png" alt="" />
            <div className="position-absolute text-big-img position-relative">
              <img
                className="img-abs"
                src="./assets/img/iproduct-2.png"
                alt=""
              />
              <div className="title-pig-img text-center font-mali position-absolute">
                <p className="or">Fresh</p>
                <p className="or2">Fruits</p>
              </div>
            </div>
          </div>
          <div
            className="d-none d-xl-block d-xxl-none"
          >
            <img className="pr-1" src="./assets/img/pr-2.jpg" alt="" />
          </div>
        </div>
        <div className="col-12 col-xl-6 col-xxl-6 order-1">
          <div className="list-product d-flex gap-5 flex-wrap">
            <div
              className="product border-yel position-relative"
            >
              <NavLink
                className="text-decoration-none text-black"
                to={"/product-detail/4"}
              >
                <img
                  className="img-pr"
                  src="./assets/img/iproduct-8.png"
                  alt=""
                />
                <div className="title-product text-center">
                  <p>Peppers</p>
                </div>
                <div className="price-product text-center">
                  <p>
                    <span className="text-decoration-line-through text-orange-fo">
                      $ 3.49
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp; <span>$ 2.79</span>
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
              className="product border-pink-light position-relative"
            >
              <NavLink
                className="text-decoration-none text-black"
                to={"/product-detail/23"}
              >
                <img
                  className="img-pr"
                  src="./assets/img/iproduct-9.png"
                  alt=""
                />
                <div className="title-product text-center">
                  <p>Tomato</p>
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
            >
              <NavLink
                className="text-decoration-none text-black"
                to={"/product-detail/24"}
              >
                <img
                  className="img-pr"
                  src="./assets/img/iproduct-10.png"
                  alt=""
                />
                <div className="title-product text-center">
                  <p>Apples</p>
                </div>
                <div className="price-product text-center">
                  <p>
                    <span>$ 4.29</span>
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
              className="product border-blur position-relative"
            >
              <NavLink
                className="text-decoration-none text-black"
                to={"/product-detail/3"}
              >
                <img
                  className="img-pr"
                  src="./assets/img/iproduct-11.png"
                  alt=""
                />
                <div className="title-product text-center">
                  <p>Cherry</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFruit;
