import React, { useState } from "react";
import "./HeadingHeader.css";
import Modal from "react-bootstrap/Modal";

const HeadingHeader = () => {
  const [showIn, setShowIn] = useState(false);
  const [showUp, setShowUp] = useState(false);

  // sigin
  const handleCloseIn = () => {
    setShowIn(false);
    setShowUp(false);
  };
  const handleShowIn = () => {
    setShowIn(true);
    setShowUp(false);
  };

  // signup
  const handleCloseUp = () => {
    setShowUp(false);
    setShowIn(false);
  };
  const handleShowUp = () => {
    setShowUp(true);
    setShowIn(false);
  };
  return (
    <main>
      <div className="heading-header bg-dark text-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-lg-3">
              <div className="phone">
                <span className="icon bi bi-telephone-fill" />
                &nbsp;
                <a className="text-decoration-none" href="tel:0981953791">
                  +84 981-953-791
                </a>
              </div>
              <div className="address m-lg-2 d-none d-lg-block ">
                <span className="icon bi bi-geo-alt-fill" />
                &nbsp;
                <a
                  className="text-decoration-none"
                  target="_blank"
                  href="https://goo.gl/maps/bhNDbtSWcQAH1r1m6"
                >
                  298 Đ. Cầu Diễn, Minh Khai, Bắc Từ Liêm, Hà Nội
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="user">
                <span
                  onClick={handleShowIn}
                  id="userBtn"
                  className="i-per bi bi-person-circle"
                />
                {/* signin */}
                <Modal show={showIn} onHide={handleCloseIn}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <form
                      action=""
                      method="POST"
                      className="form"
                      id="form-2"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <p className="heading font-mali">SIGN IN</p>
                      <div className="spacer" />
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email3"
                          type="text"
                          placeholder="VD: email@domain.com"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password3"
                          type="password"
                          placeholder="Enter your password"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                      <a href="#" className="link">
                        Forward your password ?
                      </a>
                      <button className="form-submit" id="sign-in">
                        Sign in
                      </button>
                      <p>
                        Do you have an account?{" "}
                        <span
                          className="reg"
                          id="regBtn"
                          onClick={handleShowUp}
                        >
                          Register now
                        </span>
                      </p>
                      <p className="text-center text-black">OR</p>
                      <div className="loginWith d-flex justify-content-between">
                        <i className="icon bi bi-facebook" />
                        <i className="icon bi bi-google" />
                      </div>
                    </form>
                  </Modal.Body>
                </Modal>
                {/* signup */}
                <Modal show={showUp} onHide={handleCloseUp}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <form
                      action=""
                      method="POST"
                      className="form"
                      id="form-1"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <h3 className="heading font-mali">Sign up</h3>
                      <div className="spacer" />
                      <div className="form-group">
                        <label
                          htmlFor="fullname"
                          className="form-label font-poppins"
                        >
                          Full name
                        </label>
                        <input
                          id="fullname"
                          name="fullname2"
                          type="text"
                          placeholder="VD: sunsan"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email2"
                          type="text"
                          placeholder="VD: email@domain.com"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password2"
                          type="password"
                          placeholder="Enter your password"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="password_confirmation"
                          className="form-label"
                        >
                          Re-enter Password
                        </label>
                        <input
                          id="password_confirmation"
                          name="password_confirmation"
                          placeholder="Confirm password"
                          type="password"
                          className="form-control"
                        />
                        <span className="form-message" />
                      </div>
                      <button className="form-submit" id="sign-up">
                        Sign up
                      </button>
                      <p className="text-center text-black">OR</p>
                      <div className="loginWith d-flex justify-content-between">
                        <i className="icon bi bi-facebook" />
                        <i className="icon bi bi-google" />
                      </div>
                    </form>
                  </Modal.Body>
                </Modal>
              </div>
              <div className="select m-2">
                <select name="language" className="bg-dark">
                  <option>VN</option>
                  <option>EN</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeadingHeader;
