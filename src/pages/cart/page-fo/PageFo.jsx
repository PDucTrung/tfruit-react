import React from "react";

const PageFo = () => {
  return (
    <main>
      <div className="page-fo">
        <div className="img-fill">
          <img src="./assets/img/page-fo.jpg" alt="" />
        </div>
      </div>
      <div className="title-page-fo text-center text-white position-absolute">
        <h1 className="font-mali">Cart</h1>
        <p className="fz-24 fw-400">
          Home
          <span className="text-orange-fo">
            /
            <a
              className="text-decoration-none text-orange-fo"
              href="product.html"
            >
              Shop
            </a>
            / Cart
          </span>
        </p>
      </div>
    </main>
  );
};

export default PageFo;
