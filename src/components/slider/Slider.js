import React, { useState } from "react";
import { data } from "../../data/data";
import './slider.css'

const Slider = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="slider__banner">
        <div className="slider__container">
          <button onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}>Left</button>

          <img src={data[value].poster} alt="" />

          <button onClick={() => value === 0 ?  setValue(3)   : setValue(value - 1) }>Right</button>
        </div>
      </div>
    </>
  );
};

export default Slider;
