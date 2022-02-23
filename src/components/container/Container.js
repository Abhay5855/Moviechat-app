import React from "react";
import Navbar from "../Navbar";
import Slider from "../slider/Slider";
import "./container.css";

const Container = () => {
  return (
    <>
      <div >
        <Navbar />
         
         <div className="container__block">

         <Slider />

         </div>
        
      </div>
    </>
  );
};

export default Container;
