import React, { useState } from "react";
import Navigation from "../navigation/Navigation";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import Modal from "react-bootstrap/Modal";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div className="narbar d-flex align-items-center justify-content-between">
        <div className="rd-navbar-brand">
          <NavLink className="brand d-none d-xl-block" to="/">
            <img src="./assets/img/logo.png" alt="ss" />
          </NavLink>
          <div>
            <i
              id="menuBtn"
              className="icon bi bi-list d-xl-none hvr-grow-rotate"
              onClick={handleShow}
            />
            {/* The Modal */}
            <Modal
              className="modal-menu d-xl-none"
              show={show}
              onHide={handleClose}
            >
              <Modal.Body>
                <Navigation></Navigation>
              </Modal.Body>
            </Modal>
          </div>
        </div>

        <div className="d-none d-xl-block">
          <Navigation></Navigation>
        </div>

        <div>
          <div className="d-flex justify-content-end align-items-center gap-4">
            <div className="cart position-relative">
              <div className="number position-absolute">1</div>
              <NavLink to={"/cart"}>
                <i className="i bi bi-basket hvr-grow-rotate" />
              </NavLink>
            </div>
            <div className="search wrapper">
              <div className="i bi bi-search hvr-grow-rotate" id="searchBtn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
