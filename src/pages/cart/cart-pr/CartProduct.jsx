import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CartProduct.css";

const CartProduct = () => {
  const [Value, setValue] = useState(1);
  const increment = () => {
    if (Value > 1) {
      setValue(+Value - 1);
    }
  };
  const decrement = () => {
    setValue(+Value + 1);
  };
  return (
    <div className="container">
      <div className="cart-container">
        <div className="cart-product">
          <div className="title-cart fs-20 fw-400 d-flex align-items-center justify-content-between">
            <p>PRODUCT NAME</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
            <p className="space-name" />
          </div>
          <div className="content-cart fs-16 fw-400 d-flex flex-column gap-3">
            {/*  */}
            <div id="item-cart">
              <div className="product-in-cart d-flex align-items-center justify-content-start">
                <div className="pr-cart d-flex justify-content-between align-items-center gap-3">
                  <div className="img-thumbail-cart">
                    <img src="./assets/img/pr-fr-3.png" alt="ss" />
                  </div>
                  <div className="name-pr-cart">
                    <a
                      className="text-decoration-none text-black hvr-underline-from-center"
                      // href="productdetail.html?id=${ product.id }"
                    >
                      Cherry
                    </a>
                  </div>
                </div>
                <div className="price-cart">
                  <p>
                    $
                    <span className="price" id="price">
                      2.99
                    </span>
                  </p>
                </div>
                <div className="qty-cart">
                  <button
                    onClick={increment}
                    type="button"
                    className="btn btn-secondary btn-down"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <input
                    className="number-qty"
                    value={Value}
                    type="number"
                    id="input"
                    readOnly
                  />
                  <button
                    onClick={decrement}
                    type="button"
                    className="btn btn-secondary btn-up"
                  >
                    <i className="fas fa-plus" />
                  </button>
                </div>
                <div className="total-cart">
                  <p>
                    $
                    <span className="total" id="total">
                      2.99
                    </span>
                  </p>
                </div>
                <div className="trash">
                  <i className="bi bi-trash" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" />
      <div className="list-but-cart d-flex flex-lg-row align-items-center justify-content-lg-between flex-column gap-5">
        <div className="box-coupon d-flex flex-column align-items-center gap-3">
          <div className="coupon">
            <input
              className="coupon-code fs-16 fw-400"
              id="coupon-code"
              name="coupon-code"
              placeholder="Coupon code"
              type="text"
            />
          </div>
          <div className="apply-coupon">
            <button className="btn-coupon fs-16 fw-400 fw-400 text-uppercase">
              Apply coupon
            </button>
          </div>
        </div>
        <div className="box-total d-flex flex-column align-items-start gap-3">
          <div className="total-sum">
            <p>
              Total: <span className="fs-20">$</span>
              <span className="sum font-mali fs-24 fw-500" id="total-sum">
                2.99
              </span>
            </p>
          </div>
          <div className="cart-check">
            <button className="btn-next-to-checkout fw-400 text-uppercase">
              <NavLink className="text-decoration-none" to={"/checkout"}>
                Proceed to checkout
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
