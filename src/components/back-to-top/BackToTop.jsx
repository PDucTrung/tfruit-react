import React from "react";
import "./BackToTop.css";

const BackToTop = () => {
  return (
    <div className="back-to-top text-white position-fixed hvr-grow-rotate">
      <a className="text-none text-white" href="#">
        <i className="bi bi-box-arrow-up"></i>
      </a>
    </div>
  );
};

export default BackToTop;
