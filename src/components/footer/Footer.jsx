import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <main>
      <div className="footer text-white font-poppins bg-dark">
        <div className="container">
          <div className="row gap-3 gap-md-0">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="gird-footer1 text-center d-flex flex-column gap-3">
                <div>
                  <img src="../assets/img/logo2.png" alt="ss" />
                </div>
                <p className="text-gray-fo">Weekdays: 08:00am - 08:00pm</p>
                <p className="text-gray-fo">Weekends: 10:00am - 06:00pm</p>
                <div className="line" />
                <div className="list-icon-footer d-flex gap-5 justify-content-center">
                  <div>Follow Us:</div>
                  <div className="d-flex gap-3">
                    <i className="bi bi-facebook" />
                    <i className="bi bi-twitter" />
                    <i className="bi bi-google" />
                    <i className="bi bi-instagram" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ft-2 col-lg-4">
              <div className="gird-footer2 text-center d-flex flex-column gap-3">
                <h4>CONTACTS</h4>
                <p>
                  <span>
                    <i className="bi bi-phone" />
                  </span>{" "}
                  &nbsp;
                  <a href="#" className="text-gray-fo">
                    + 84 981 953 791
                  </a>
                </p>
                <p>
                  <span>
                    <i className="bi bi-geo-alt-fill" />
                  </span>{" "}
                  &nbsp;
                  <a href="#" className="text-gray-fo">
                    298 Đ. Cầu Diễn, Minh Khai, Bắc Từ Liêm, Hà Nội
                  </a>
                </p>
                <p>
                  <span>
                    <i className="bi bi-envelope" />
                  </span>{" "}
                  &nbsp;
                  <a href="#" className="text-gray-fo">
                    TFruit@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 ft-3 col-lg-4">
              <div className="gird-footer1 text-center d-flex flex-column gap-3">
                <h4>NEWSLETTER</h4>
                <p className="text-gray-fo">
                  Join our email newsletter for news and tips.
                </p>
                <div className="form-footer">
                  <form
                    action=""
                    method="POST"
                    className="form bg-dark"
                    id="form-3"
                  >
                    <div className="form-group">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter your E-mail"
                        className="form-control text-center"
                      />
                      <span className="form-message" />
                    </div>
                    <button className="form-submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
