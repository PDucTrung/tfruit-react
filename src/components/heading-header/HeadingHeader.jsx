import React from "react";
import "./HeadingHeader.css";


const HeadingHeader = () => {
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
                <span id="userBtn" className="i-per bi bi-person-circle" />
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
