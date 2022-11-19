import React from "react";
import "./Infomation.css";

const Infomation = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center gap-5 align-items-center flex-wrap">
        <div className="box-infor text-center d-flex align-items-center gap-3 justify-content-center flex-column">
          <div className="hvr-grow-rotate">
            <i className="bi bi-phone" />
          </div>
          <div>
            <a href="#" className="text-decoration-none text-green">
              + 84 981 953 791
            </a>
          </div>
          <div>
            <a href="#" className="text-decoration-none text-green">
              + 84 123 456 789
            </a>
          </div>
        </div>
        <div className="box-infor text-center d-flex align-items-center gap-3 justify-content-center flex-column">
          <div className="hvr-grow-rotate">
            <i className="bi bi-geo-alt" />
          </div>
          <div>
            <a href="#" className="text-decoration-none text-green">
              298 Đ. Cầu Diễn, Minh
            </a>
          </div>
          <div>
            <a href="#" className="text-decoration-none text-green">
              Khai, Bắc Từ Liêm, Hà Nội
            </a>
          </div>
        </div>
        <div className="box-infor text-center d-flex align-items-center gap-3 justify-content-center flex-column">
          <div className="hvr-grow-rotate">
            <i className="bi bi-envelope" />
          </div>
          <div>
            <a href="#" className="text-decoration-none text-green">
              Tfruit@gmail.com
            </a>
          </div>
          <div>
            <a href="#" className="text-decoration-none text-green">
              Tfruit@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
