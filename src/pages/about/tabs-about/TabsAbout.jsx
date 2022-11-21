import React, { useState } from "react";
import "./TabsAbout.css";

const TabsAbout = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";
  return (
    <div className="container">
      <div className="tabs-body d-flex flex-column justify-content-center align-items-xl-start gap-5 align-items-center flex-xl-row">
        <div className="img-thumbnail-tabs">
          <img src="./assets/img/about-1.jpg" alt="sds" />
        </div>
        <div className="tabs-about-ab">
          <div className="mb-3 pl-10">
            <span className="font-mali fs-40 fw-500">Our Goals</span>
          </div>
          <div className="tabs-content-ab">
            <ul className="tab-list-ab">
              <li
                className={`tabs-ab ${getActiveClass(1, "active-tabs-ab")}`}
                onClick={() => toggleTab(1)}
              >
                Goals
              </li>
              <li
                className={`tabs-ab ${getActiveClass(2, "active-tabs-ab")}`}
                onClick={() => toggleTab(2)}
              >
                Values
              </li>
              <li
                className={`tabs-ab ${getActiveClass(3, "active-tabs-ab")}`}
                onClick={() => toggleTab(3)}
              >
                Mission
              </li>
            </ul>
            <div className="content-container">
              <div
                className={`content-ab ${getActiveClass(
                  1,
                  "active-content-ab"
                )}`}
              >
                <div className="tab-content-ab">
                  <div>
                    <p className="fs-15">
                      Customer satisfaction is our top priority, there is
                      nothing more exciting to us than a repeat customer. With
                      our price match policy along with guaranteed VNPost
                      delivery, we have been regarded as one of most trusted
                      online marijuana dispensaries.
                    </p>
                  </div>
                  <button className="btn-submit">READ MORE</button>
                </div>
              </div>
              <div
                className={`content-ab ${getActiveClass(
                  2,
                  "active-content-ab"
                )}`}
              >
                <div className="tab-content-ab">
                  <div>
                    <p className="fs-15">
                      Our products undergo strict quality assurance checks that
                      include testing for molds and pesticides. We then put all
                      of our products through our in-house analysis processes.
                    </p>
                  </div>
                  <button className="btn-submit">READ MORE</button>
                </div>
              </div>
              <div
                className={`content-ab ${getActiveClass(
                  3,
                  "active-content-ab"
                )}`}
              >
                <div className="tab-content-ab">
                  <div>
                    <p className="fs-15">
                      Our mission is to bring our customers quality products, at
                      the lowest price with the best service in the industry.
                    </p>
                  </div>
                  <button className="btn-submit">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsAbout;
