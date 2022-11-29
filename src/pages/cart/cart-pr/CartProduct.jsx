import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./CartProduct.css";
import { Container } from "react-bootstrap";

import { selectCart } from "../../../store/features/cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const CartProduct = () => {
  const { items, totalPrice, incQty, decQty, removeItem, clearItem } =
    useSelector(selectCart);
  const dispatch = useDispatch();
  const handleDelete = (productId) => {
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("OK!", "", "success");
        dispatch(removeItem(productId));
      }
    });
  };

  const handleClear = () => {
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("OK!", "", "success");
        dispatch(clearItem());
      }
    });
  };

  if (items.length === 0) {
    return (
      <Container className="d-flex align-items-center justify-content-center flex-column gap-4">
        <div className="no-product text-center font-mali fw-500">
          There are no products in cart
        </div>
        <NavLink
          className="btn-no-pr button button-2 text-decoration-none"
          to={"/product"}
        >
          Go Shopping
        </NavLink>
      </Container>
    );
  }

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
            {items.map((item) => (
              <div id="item-cart">
                <div className="product-in-cart d-flex align-items-center justify-content-start">
                  <div className="pr-cart d-flex justify-content-between align-items-center gap-3">
                    <div className="img-thumbail-cart">
                      <img src={item.product.img} alt="ss" />
                    </div>
                    <NavLink
                      className="name-pr-cart"
                      to={`/product-detail/${item.productId}`}
                    >
                      <div className="text-decoration-none text-black hvr-underline-from-center">
                        {item.product.name}
                      </div>
                    </NavLink>
                  </div>
                  <div className="price-cart">
                    <p>
                      $
                      <span className="price" id="price">
                        {item.product.price}
                      </span>
                    </p>
                  </div>
                  <div className="qty-cart">
                    <button
                      onClick={() => dispatch(decQty(item.product.id))}
                      type="button"
                      className="btn btn-secondary btn-down"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      className="number-qty"
                      value={item.quantity}
                      type="number"
                      id="input"
                      readOnly
                    />
                    <button
                      onClick={() => dispatch(incQty(item.product.id))}
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
                        {(item.quantity * item.product.price).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div className="trash">
                    <i
                      className="bi bi-trash"
                      onClick={() => handleDelete(item.product.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="clear-cart">
            <button className="btn-clear" onClick={() => handleClear()}>
              Clear all
            </button>
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
                {totalPrice.toFixed(2)}
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
