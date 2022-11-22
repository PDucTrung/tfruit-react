import React, { useState } from "react";
import Slider from "react-input-slider";

const SliderRange = ({ products }) => {
  const [Min, setMin] = useState({ x: 30 });
  const [Max, setMax] = useState({ x: 70 });

  // filter range
//   const filterRange = () => {
//     console.log(
//       products.filter((pr) => pr.price >= Min.x && pr.price <= Max.x)
//     );
//   };

  return (
    <div classname="range-slider d-flex flex-column justify-content-center align-items-center">
      <div className="position-relative">
        {/* <span>Min: </span> */}
        <Slider
          className="slider-range-min"
          axis="x"
          x={Min.x}
          xmin={0}
          xmax={50}
          onChange={({ x }) => setMin((Min) => ({ ...Min, x }))}
          styles={{
            track: {
              backgroundColor: "none",
              width: "120px",
            },
            active: {
              backgroundColor: "orange",
            },
            thumb: {
              width: 20,
              height: 20,
            },
            disabled: {
              opacity: 0.5,
            },
          }}
        />
        {/* <span>Max: </span> */}
        <Slider
          className="slider-range-max"
          axis="x"
          x={Max.x}
          xreverse={true}
          xmin={100}
          xmax={50}
          onChange={({ x }) => setMax((Max) => ({ ...Max, x }))}
          styles={{
            track: {
              backgroundColor: "none",
              width: "120px",
            },
            active: {
              backgroundColor: "orange",
            },
            thumb: {
              width: 20,
              height: 20,
            },
            disabled: {
              opacity: 0.5,
            },
          }}
        />
        <div className="line-range"></div>
      </div>
      <br />
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <div className="button button-2" onClick={filterRange}>
          FIlter
        </div>
        <div className="d-flex align-items-center">
          <span className="text-orange-fo">$</span>
          <input
            className="range-number"
            type="number"
            value={Min.x}
            readOnly
          />
          <span>-&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="text-orange-fo">$</span>
          <input
            className="range-number"
            type="number"
            value={Max.x}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default SliderRange;
