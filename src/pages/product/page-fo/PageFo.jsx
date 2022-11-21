import React from "react";
import { NavLink } from "react-router-dom";

const PageFo = () => {
  return (
    <main>
      <div className="page-fo">
        <div className="img-fill">
          <img src="./assets/img/page-fo.jpg" alt="" />
        </div>
      </div>
      <div className="title-page-fo text-center text-white position-absolute">
        <h1 className="font-mali">Shop</h1>
        <p className="fz-24 fw-400">
          Home
          <span className="text-orange-fo">
            /
            <NavLink
              className="text-decoration-none text-orange-fo"
              to={"/product"}
            >
              Shop
            </NavLink>
          </span>
        </p>
      </div>
    </main>
  );
};

export default PageFo;
