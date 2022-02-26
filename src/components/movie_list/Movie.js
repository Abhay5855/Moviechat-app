import React from "react";
import "./movie.css";
import { useFetch } from "../hooks/useFetch";
import {db} from '../../firebase/firebase'

const Movie = ({ title, trending }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const { isLoading, error, movies } = useFetch(`${trending}`);

  // Display the movies

  const displayMovies = movies.map((movie) => {


       const handleFavourite = (title , orginal , poster) => {

            const data = {
                  title,
                  orginal,
                  poster,
            }

             console.log(data);
             
       }
    return (
      <div className="movie__container" key={movie.id}>
        <img
          src={`${BASE_URL}${movie.backdrop_path}`}
          alt={`${movie.original_name}`}
          loading='lazy'
        />

        <div className="movie__content">
          
          <p>{movie.title || movie.original_name}</p>
          <span onClick={() => handleFavourite(movie.title , movie.original_name , movie.backdrop_path)}><i class="fas fa-plus"></i></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2 className="movie__desc">{title}</h2>

      <div className="movies__list">{displayMovies}</div>
    </div>
  );
};

export default Movie;
