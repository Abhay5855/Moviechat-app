import React from "react";
import "./movie.css";
import { useFetch } from "../hooks/useFetch";

const Movie = ({ title, trending }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const { isLoading, error, movies } = useFetch(`${trending}`);

  // Display the movies

  const displayMovies = movies.map((movie) => {
    return (
      <div className="movie__container" key={movie.id}>
        <img
          src={`${BASE_URL}${movie.backdrop_path}`}
          alt={`${movie.original_name}`}
        />

        <div className="movie__content">
          <p>{movie.title}</p>
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
