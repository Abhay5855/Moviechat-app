import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import "./searchpage.css";

const SearchPage = () => {
  const location = useLocation();
  const value = location.state.value;

  let noMovies = null;

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  if (value.length <= 0) {
    noMovies = <h2>Sorry, No movies found</h2>;
  }

  const diplaySearch = value.map((movie) => {
    return (
      <div key={movie.id}>
        {movie.poster_path === null ? (
          ""
        ) : (
          <img
            src={`${BASE_URL}${movie?.poster_path}`}
            alt={movie.name}
            loading="lazy"
          />
        )}
      </div>
    );
  });

  return (
    <>
      <Navbar />
      {noMovies}
      <div className="searchpage__container">{diplaySearch}</div>
    </>
  );
};

export default SearchPage;
