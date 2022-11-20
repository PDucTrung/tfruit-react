import React from "react";
import "./Billing.css";

const Billing = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center gap-5 flex-column justify-content-center align-items-center flex-md-row align-items-md-start">
        {/* adress */}
        <div className="adress-customer">
          <div>
            <p className="fs-24 fw-500">Billing Address</p>
          </div>
          <div className="list-infomation">
            <form action="" method="POST" className="form" id="form-4">
              <div className="name-customer d-flex gap-3">
                {/* fist name */}
                <div className="form-group">
                  <label
                    htmlFor="firstname"
                    className="form-label font-poppins"
                  >
                    First name
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Ex: Pham"
                    className="form-control"
                  />
                  <span className="form-message" />
                </div>
                {/* last name */}
                <div className="form-group">
                  <label htmlFor="lastname" className="form-label font-poppins">
                    Last name
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Ex: Trung"
                    className="form-control"
                  />
                  <span className="form-message" />
                </div>
              </div>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Ex: email@domain.com"
                  className="form-control"
                />
                <span className="form-message" />
              </div>
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Ex: Ha Noi"
                  className="form-control"
                />
                <span className="form-message" />
              </div>
              <div className="form-group">
                <label htmlFor="district" className="form-label">
                  District
                </label>
                <input
                  id="district"
                  name="district"
                  type="text"
                  placeholder="Ex: Hoai Duc"
                  className="form-control"
                />
                <span className="form-message" />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="form-control"
                />
                <span className="form-message" />
              </div>
              <div className="form-group">
                <label htmlFor="adress" className="form-label">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="EX: 0981953791"
                  className="form-control"
                />
                <span className="form-message" />
              </div>
            </form>
          </div>
        </div>
        {/* shopping cart */}
        <div className="shopping-cart">
          <div className="shopping fs-16 fw-400 d-flex flex-column gap-3">
            {/*  */}
            <div>
              <p className="text-center font-mali fs-24 fw-500">Your order</p>
            </div>
            {/*  */}
            <div className="checkout-item d-flex flex-column gap-3">
              <div id="checkout-item">
                <div className="product-in-cart d-flex align-items-center justify-content-between gap-4">
                  <div className="pr-cart d-flex justify-content-between align-items-center gap-3">
                    <div className="img-thumbail-cart">
                      <img src="./assets/img/pr-fr-3.png" alt="ss" />
                    </div>
                    <div className="name-pr-cart">
                      <p>Cherry</p>
                    </div>
                  </div>
                  <div className="total-cart">
                    <p className="font-mali fz-24 fw-600">
                      X <span id="total">1</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="product-in-cart d-flex align-items-center justify-content-between">
              <div className="total-checkout font-mali fs-16 fw-600">
                <p>
                  Total: <span />
                </p>
              </div>
              <div className="total-cart">
                <p className="font-mali fs-16 fw-600">
                  ${" "}
                  <span id="total-sum" className="sum-checkout">
                    7.25
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
