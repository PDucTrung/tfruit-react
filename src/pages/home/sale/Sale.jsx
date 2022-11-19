import React, { useEffect, useState } from "react";
import "./Sale.css";

const Sale = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("12/25/2022").getTime()
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
        <p className="p-sale-1" data-aos="fade-down" data-aos-delay={100}>
          We offer a hot deal offer every festival
        </p>
        <p className="p-sale-2" data-aos="fade-down" data-aos-delay={100}>
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
            <a className="text-decoration-none" href="product.html">
              <i className="bi bi-arrow-right-circle" /> &nbsp; Shop collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;