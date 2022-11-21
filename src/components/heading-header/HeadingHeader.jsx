import React, { useState } from "react";
import "./HeadingHeader.css";
import Modal from "react-bootstrap/Modal";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import FormSignup from "./form-signup/FormSignup";
import { toast } from "react-toastify";

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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (e) => {
    toast(" 🦄 wellcome tfruit! ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(e);
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
                      onSubmit={handleSubmit(onSubmit)}
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
                          {...register("emailSignin", {
                            required: "Please enter this field!",
                            pattern: {
                              value:
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                              message: "This field must be email!",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="emailSignin"
                          render={({ messages }) => {
                            return messages
                              ? Object.entries(messages).map(
                                  ([type, message]) => (
                                    <span
                                      className="form-message text-red"
                                      key={type}
                                    >
                                      {message}
                                    </span>
                                  )
                                )
                              : null;
                          }}
                        />
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
                          {...register("passwordSignin", {
                            required: "Please enter this field!",
                            pattern: {
                              value:
                                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                              message:
                                "Password must consist of at least 8 letters and contain at least one uppercase letter, one lowercase letter and one number.",
                            },
                          })}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="passwordSignin"
                          render={({ messages }) => {
                            return messages
                              ? Object.entries(messages).map(
                                  ([type, message]) => (
                                    <span
                                      className="form-message text-red"
                                      key={type}
                                    >
                                      {message}
                                    </span>
                                  )
                                )
                              : null;
                          }}
                        />
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
                    <FormSignup></FormSignup>
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
