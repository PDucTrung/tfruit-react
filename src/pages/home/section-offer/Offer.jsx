import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Offer.css";

const Offer = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("02/20/2023").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <main>
      <Container className="container">
        <div className="list-offer d-flex flex-column gap-5 flex-lg-row justify-content-center align-items-center">
          <div className="offer position-relative d-flex justify-content-between">
            <img src="./assets/img/offer1.png" alt="ss" />
            <div className="content-offer position-absolute d-flex flex-column justify-content-between">
              <div className="font-poppins best order-1">Best offer</div>
              <div className="timeDown order-2" id="timedown">
                {state.days || "0"}d : {state.hours || "00"}h :{" "}
                {state.minutes || "00"}m : {state.seconds || "00"}s
              </div>
              <div className="font-popins coconut order-3">Coconut Fresh</div>
              <div className="font-mali shopnow order-4">
                <NavLink className="text-decoration-none" to={"/product"}>
                  Shop now
                </NavLink>
              </div>
            </div>
          </div>
          <div className="offer position-relative d-flex justify-content-between">
            <img src="./assets/img/offer2.png" alt="ss" />
            <div className="content-offer position-absolute d-flex flex-column justify-content-between">
              <div className="font-poppins best order-1">Best offer</div>
              <div className="timeDown order-2" id="timedown2">
                {state.days || "0"}d : {state.hours || "00"}h :{" "}
                {state.minutes || "00"}m : {state.seconds || "00"}s
              </div>
              <div className="font-popins coconut2 order-3">
                Get Garden Fresh Pure Orange
              </div>
              <div className="font-mali shopnow order-4">
                <NavLink className="text-decoration-none" to={"/product"}>
                  Shop now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Offer;
