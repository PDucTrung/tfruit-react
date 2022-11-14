import React from "react";
import Navigation from "../navigation/Navigation";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <div className="narbar d-flex align-items-center justify-content-between">
        <div className="rd-navbar-brand">
          <NavLink className="brand d-none d-xl-block" to="/">
            <img src="./src/assets/img/logo.png" alt="ss" />
          </NavLink>
          <div>
            <i
              id="menuBtn"
              className="icon bi bi-list d-xl-none hvr-grow-rotate"
            />
            {/* The Modal */}
            <div id="menuModal" className="modal4 d-xl-none">
              {/* Modal content */}
            </div>
          </div>
        </div>

        <Navigation></Navigation>
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
