import React, { useState } from "react";

const Pay = ({ totalPrice, onSubmit, handleSubmit }) => {
  const [Show, setShow] = useState(Boolean);
  const [Show2, setShow2] = useState(Boolean);
  const [Show3, setShow3] = useState(Boolean);
  return (
    <div className="container">
      <div className="pay d-flex justify-content-center gap-5 flex-column justify-content-center align-items-center flex-md-row align-items-md-start">
        {/* payment methods */}
        <div className="payment-method">
          <div>
            <p className="fs-24 fw-500">Payment methods</p>
          </div>
          <div className="payment d-flex flex-column justify-content-center gap-4">
            <div className="form-payment d-flex justify-content-center align-items-start flex-column">
              {/* check */}
              <div className="d-flex justify-content-center gap-2 align-items-center">
                <input
                  className="check-pay"
                  type="checkbox"
                  name="check-pay"
                  id="check-pay"
                  checked={Show}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setShow(true);
                      setShow2(false);
                      setShow3(false);
                    } else {
                      setShow(false);
                    }
                  }}
                />
                <label htmlFor="check-pay">Visa/Master card</label>
              </div>
              {/* content */}
              <div
                className="content-check"
                style={{ display: Show ? "block" : "none" }}
              >
                <p className="fs-16 fw-400 text-green">
                  Enter your card information:
                </p>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                  {/*  */}
                  <div className="name-visa">
                    <input
                      type="text"
                      className="visa"
                      name="name-visa"
                      id="name-visa"
                      placeholder="Name of card"
                    />
                  </div>
                  {/*  */}
                  <div className="number-visa">
                    <input
                      type="text"
                      className="visa"
                      name="number-visa"
                      id="number-visa"
                      placeholder="Card number"
                    />
                  </div>
                  {/*  */}
                  <div>
                    <p className="text-center fs-14 text-gray-fo">
                      Expiration date
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <div className="month-visa">
                        <select name="month-visa">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="year-visa">
                        <select name="month-visa">
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="add-card-visa">
                    <button className="checkout">Add your cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-payment d-flex justify-content-center align-items-start flex-column">
              {/* check */}
              <div className="d-flex justify-content-center gap-2 align-items-center">
                <input
                  className="check-pay"
                  type="checkbox"
                  name="check-pay"
                  id="check-pay2"
                  checked={Show2}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setShow2(true);
                      setShow(false);
                      setShow3(false);
                    } else {
                      setShow2(false);
                    }
                  }}
                />
                <label htmlFor="check-pay">PAYPAL</label>
              </div>
              {/* content */}
              <div
                className="content-check2"
                style={{ display: Show2 ? "block" : "none" }}
              >
                <p className="fs-16 fw-400 text-green">
                  Enter your card information:
                </p>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                  {/*  */}
                  <div className="name-visa">
                    <input
                      type="text"
                      className="visa"
                      name="name-visa"
                      id="name-visa"
                      placeholder="Name of card"
                    />
                  </div>
                  {/*  */}
                  <div className="number-visa">
                    <input
                      type="text"
                      className="visa"
                      name="number-visa"
                      id="number-visa"
                      placeholder="Card number"
                    />
                  </div>
                  {/*  */}
                  <div>
                    <p className="text-center fs-14">Expiration date</p>
                    <div className="d-flex justify-content-center gap-2">
                      <div className="month-visa">
                        <select name="month-visa">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="year-visa">
                        <select name="month-visa">
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="add-card-visa">
                    <button className="checkout">Add your cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-payment d-flex justify-content-center align-items-start flex-column">
              {/* check */}
              <div className="d-flex justify-content-center gap-2 align-items-center">
                <input
                  className="check-pay"
                  type="checkbox"
                  name="check-pay"
                  id="check-pay3"
                  checked={Show3}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setShow3(true);
                      setShow(false);
                      setShow2(false);
                    } else {
                      setShow3(false);
                    }
                  }}
                />
                <label htmlFor="check-pay">DIRECT BANK TRANSFER</label>
              </div>
              {/* content */}
              <div
                className="content-check3"
                style={{ display: Show3 ? "block" : "none" }}
              >
                <p className="fs-16 fw-400 text-green">
                  Enter your card information:
                </p>
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-4">
                  {/*  */}
                  <div className="name-visa">
                    <input
                      type="text"
                      className="visa"
                      name="name-visa"
                      id="name-visa"
                      placeholder="Name of card"
                    />
                  </div>
                  {/*  */}
                  <div className="number-visa">
                    <input
                      type="text"
                      className="visa"
                      name="number-visa"
                      id="number-visa"
                      placeholder="Card number"
                    />
                  </div>
                  {/*  */}
                  <div>
                    <p className="text-center fs-14">Expiration date</p>
                    <div className="d-flex justify-content-center gap-2">
                      <div className="month-visa">
                        <select name="month-visa">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="year-visa">
                        <select name="month-visa">
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="add-card-visa">
                    <button className="checkout">Add your cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cart totals */}
        <div className="cart-totals d-flex flex-column justify-content-between">
          <div className="cart-sub-totals d-flex justify-content-between">
            <div>
              <p>CART SUBTOTAL</p>
            </div>
            <div>
              $<span className="sum-checkout">{totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className="shipping d-flex justify-content-between">
            <div>
              <p>SHIPPING</p>
            </div>
            <div>
              <p>FREE</p>
            </div>
          </div>
          <div className="totals d-flex justify-content-between">
            <div>
              <p>TOTAL</p>
            </div>
            <div>
              <p>
                $<span className="sum-checkout">{totalPrice.toFixed(2)}</span>
              </p>
            </div>
          </div>
          <div className="button-checkout">
            <button className="btn-checkout" onClick={handleSubmit(onSubmit)}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
