import React from "react";
import { Container } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="service d-flex flex-column gap-5 flex-sm-row flex-sm-wrap justify-content-sm-center gap-sm-5 align-items-md-center">
      <div className="list-service-1 d-flex flex-column gap-5 align-items-center order-md-1">
        <div className="box-service ml-20">
          <div className="row d-flex box-sr">
            <div className="col-9 order-2 ct-sr">
              <div className="title-service font-mali">100% Organic</div>
              <div className="content-service">
                We advocate that food be authentic and ethical, freshly prepared
                and tasty
              </div>
            </div>
            <div className="col-3 order-1 icon-service hvr-buzz-out">
              <img src="./assets/img/service-1.png" alt="ss" />
            </div>
          </div>
        </div>
        <div className="box-service">
          <div className="row d-flex box-sr">
            <div className="col-9 order-2 ct-sr">
              <div className="title-service font-mali">Support 24/7</div>
              <div className="content-service">
                Always support customers at all times of the day.
              </div>
            </div>
            <div className="col-3 order-1 icon-service hvr-buzz-out">
              <img src="./assets/img/service-2.png" alt="ss" />
            </div>
          </div>
        </div>
        <div className="box-service ml-20">
          <div className="row d-flex box-sr">
            <div className="col-9 order-2 ct-sr">
              <div className="title-service font-mali">Secure Payment</div>
              <div className="content-service">
                Great customer support, best services and secure payment
              </div>
            </div>
            <div className="col-3 order-1 icon-service hvr-buzz-out">
              <img src="./assets/img/service-3.png" alt="ss" />
            </div>
          </div>
        </div>
      </div>
      <div className="list-service-2 d-flex flex-column gap-5 align-items-center order-md-3">
        <div className="box-service mr-20">
          <div className="row d-flex box-sr">
            <div className="col-9 order-2 ct-sr order-lg-1">
              <div className="title-service font-mali">Fresh &amp; Healthy</div>
              <div className="content-service">
                Obtaining the recommended daily fruits and vegetables.
              </div>
            </div>
            <div className="col-3 order-1 icon-service order-lg-2 hvr-buzz-out">
              <img src="./assets/img/service-4.png" alt="ss" />
            </div>
          </div>
        </div>
        <div className="box-service">
          <div className="row d-flex box-sr">
            <div className="col-9 order-2 ct-sr order-lg-1">
              <div className="title-service font-mali">Fresh Products</div>
              <div className="content-service">
                We deliver organic pesticide-free and sustainably-grown produce.
              </div>
            </div>
            <div className="col-3 order-1 icon-service order-lg-2 hvr-buzz-out">
              <img src="./assets/img/service-5.png" alt="ss" />
            </div>
          </div>
        </div>
        <div className="box-service mr-20">
          <div className="row d-flex box-sr">
            <div className="col-9 order-2 ct-sr order-lg-1">
              <div className="title-service font-mali">Free Shipping</div>
              <div className="content-service">
                Free delivery from 20$ and allows you to cancel or suspend
                deliveries.
              </div>
            </div>
            <div className="col-3 order-1 icon-service order-lg-2 hvr-buzz-out">
              <img src="./assets/img/service-6.png" alt="ss" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="img-service order-md-2"
      >
        <img src="./assets/img/iservice.png" alt="zz" />
      </div>
    </div>
  );
};

export default Services;
