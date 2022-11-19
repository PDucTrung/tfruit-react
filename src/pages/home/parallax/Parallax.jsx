import React, { useState } from "react";
import "./Parallax.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Parallax = () => {
  const [CounterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}>
      <div
        className="para position-relative parallax-container"
        data-parallax-img="../img/scroll-1.jpg"
      >
        <div className="parallax-content">
          <div className="container">
            <div
              id="counter"
              className="d-flex flex-column justify-content-between align-items-center gap-5 text-center flex-sm-row flex-sm-wrap justify-content-md-center justify-content-lg-between"
            >
              <div className="">
                <div className="counter-creative">
                  <div className="counter-creative-number d-flex align-items-center justify-content-center">
                    <span className="counter count">
                      {CounterOn && (
                        <CountUp
                          start={0}
                          end={500}
                          duration={3}
                          delay={0}
                        ></CountUp>
                      )}
                    </span>
                    <span>
                      <i className="text-orange bi bi-trophy" />
                    </span>
                  </div>
                  <h6 className="counter-creative-title">Awards</h6>
                </div>
              </div>
              <div className="">
                <div className="counter-creative">
                  <div className="counter-creative-number d-flex align-items-center justify-content-center">
                    <span className="counter count">
                      {CounterOn && (
                        <CountUp
                          start={0}
                          end={700}
                          duration={3}
                          delay={0}
                        ></CountUp>
                      )}
                    </span>
                    <span>
                      <i className="text-orange bi bi-house" />
                    </span>
                  </div>
                  <h6 className="counter-creative-title">Products</h6>
                </div>
              </div>
              <div className="">
                <div className="counter-creative">
                  <div className="counter-creative-number d-flex align-items-center justify-content-center">
                    <span className="counter count">
                      {CounterOn && (
                        <CountUp
                          start={0}
                          end={1000}
                          duration={3}
                          delay={0}
                        ></CountUp>
                      )}
                    </span>
                    <span>
                      <i className="text-orange bi bi-brightness-high" />
                    </span>
                  </div>
                  <h6 className="counter-creative-title">Happy Clients</h6>
                </div>
              </div>
              <div className="">
                <div className="counter-creative">
                  <div className="counter-creative-number d-flex align-items-center justify-content-center">
                    <span className="counter count">
                      {CounterOn && (
                        <CountUp
                          start={0}
                          end={100}
                          duration={3}
                          delay={0}
                        ></CountUp>
                      )}
                    </span>
                    <span>
                      <i className="text-orange bi bi-person-lines-fill" />
                    </span>
                  </div>
                  <h6 className="counter-creative-title">Farmers</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Parallax;
