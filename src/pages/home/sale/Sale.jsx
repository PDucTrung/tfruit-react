import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Sale.css";

const Sale = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("12/12/2023").getTime()
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
    <div className="sale position-relative">
      <div className="page-fo">
        <div className="img-fill2">
          <img src="./assets/img/isale.png" alt="dsd" />
        </div>
      </div>
      <div className="content-sale text-center text-white position-absolute d-flex flex-column gap-5">
        <p className="p-sale-1">
          We offer a hot deal offer every festival
        </p>
        <p className="p-sale-2">
          Deal of the day!
        </p>
        <div className="d-flex justify-content-center gap-3">
          <div className="box-time">
            <div id="days">{state.days || "0"}</div>
            <div className="text-sale">Days</div>
          </div>
          <div className="box-time">
            <div id="hours">{state.hours || "00"}</div>
            <div className="text-sale">Hours</div>
          </div>
          <div className="box-time">
            <div id="minutes">{state.minutes || "00"}</div>
            <div className="text-sale">Minutes</div>
          </div>
          <div className="box-time">
            <div id="seconds">{state.seconds || "00"}</div>
            <div className="text-sale">Seconds</div>
          </div>
        </div>
        <div>
          <div className="button button-2 but-sale">
            <NavLink className="text-decoration-none" to={"/product"}>
              <i className="bi bi-arrow-right-circle" /> &nbsp; Shop collection
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
