import React, { useState } from "react";
import { data } from "../../data/data";
import "./slider.css";
import { useFetch } from "../hooks/useFetch";

const Slider = ({ trending }) => {
  const [value, setValue] = useState(0);

  const movies = useFetch(`${trending}`);

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  // console.log(movies.movies[value].backdrop_path);

  const display = BASE_URL + movies.movies[value].backdrop_path;

  //   Handle left corousal of images
  const handleLeft = () => {
    value === 0 ? setValue(5) : setValue(value - 1);
  };

  const handleRight = () => {
    value === 5 ? setValue(0) : setValue(value + 1);
  };
  return (
    <>
      <div className="slider__banner">
        <div className="slider__container">
          <div className="slider__arrows" onClick={() => handleLeft()}>
            <i class="fas fa-chevron-left"></i>
          </div>

          <img className="slider__image" src={display} alt="poster" loading="lazy"/>

          <div className="slider__arrows" onClick={() => handleRight()}>
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
