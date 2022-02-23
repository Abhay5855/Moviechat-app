import React, { useState } from "react";
import { data } from "../../data/data";
import './slider.css'

const Slider = () => {
  const [value, setValue] = useState(0);

//   Handle left corousal of images
   const handleLeft = () => {

        value === 0 ?   setValue(3) : setValue(value - 1); 

        
   }

   const handleRight = () => {

    value === 3 ?  setValue(0) : setValue(value + 1); 
       
   }
  return (
    <>
      <div className="slider__banner">
        <div className="slider__container">
          <div  className="slider__arrows" onClick={() => handleLeft()}>
          <i class="fas fa-chevron-left"></i>

          </div>

        

          <img className="slider__image" src={data[value].poster} alt="poster" />

          

         
          <div className="slider__arrows" onClick={() => handleRight()}>
         
          <i class="fas fa-chevron-right"></i>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Slider;
