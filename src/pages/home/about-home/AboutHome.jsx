import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutHome.css";

const AboutHome = () => {
  return (
    <div className="container">
      <div className="abouthome row">
        <div className="img-abouthome col-12 col-xl-6">
          <img src="./assets/img/iabouthome.png" alt="ss" />
        </div>
        <div
          className="content-abouthome col-12 text-center col-xl-6 d-flex flex-column justify-content-center gap-3"
          data-aos="zoom-in-down"
          data-aos-delay={100}
        >
          <p
            className="text-content-ab-1 order-1 text-left"
            data-aos="fade-down-left"
            data-aos-delay={100}
          >
            A Few Words About Our Store
          </p>
          <p
            className="text-content-ab-2 order-2 text-left"
            data-aos="fade-down-left"
            data-aos-delay={100}
          >
            about us
          </p>
          <p
            className="text-content-ab-3 order-3 text-left"
            data-aos="fade-down-left"
            data-aos-delay={100}
          >
            TFruit is a family-owned grocery store that has been offering
            quality products for your everyday life since 2000, while also
            providing superior service and competitive prices.
          </p>
          <div className="next-about d-flex gap-3 order-4">
            <div className="icon-next-ab hvr-push">
              <NavLink className="text-decoration-none" to={"/about"}>
                <i className="i-ab bi bi-arrow-right" />
              </NavLink>
            </div>
            <div className="text-next-ab">
              <p className="text-next-ab-1">MR TRUNG</p>
              <p className="text-next-ab-2">CEO, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
