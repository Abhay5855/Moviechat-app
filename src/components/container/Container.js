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

         <Slider trending={requests.fetchTrending}/>

         </div>

         <div className="container__movies">
           
         <Movie title='Trending'  trending={requests.fetchTrending}/>
         <Movie title='Netflix Originals'  trending={requests.fetchNetflixOriginals}/>
         <Movie title='Top Rated'  trending={requests.fetchTopRated}/>
         <Movie title='Action'  trending={requests.fetchActionMovies}/>
         <Movie title='Horror'  trending={requests.fetchHorrorMovies}/>


           
         </div>

         
        
        
      </div>
    </>
  );
};

export default Container;
