import React from "react";
import Movie from "../movie_list/Movie";
import Navbar from "../Navbar";
import Slider from "../slider/Slider";
import "./container.css";
import requests from '../../api/requests'

const Container = () => {
  return (
    <>
      <div >
        <Navbar />
         
         <div className="container__block">

         <Slider />

         </div>

         <div className="container__movies">
           
         <Movie title='Trending'  trending={requests.fetchTrending}/>

           
         </div>

         
        
        
      </div>
    </>
  );
};

export default Container;
