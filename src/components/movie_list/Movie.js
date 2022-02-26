import React from "react";
import "./movie.css";
import { useFetch } from "../hooks/useFetch";
import { db } from "../../firebase/firebase";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Movie = ({ title, trending }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const { isLoading, error, movies } = useFetch(`${trending}`);


  
  // Function to add the watch later movies
  const handleFavourite = (title, original, photoURL, overview) => {
    // conditional rendering to check whether title is present or not and appending the baseurl with the poster photo
    let selectTitle = title || original;
    let photo = BASE_URL + photoURL;

    // Addding the data of watch-later movies to the firebase database
    setDoc(doc(db, "watch-later", "movies"), {
      timestamp: serverTimestamp(),
      title: selectTitle,
      photoURL: photo,
      overview : overview,
    })
      .then(() => {
        navigate("/watch-later");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Display the movies

  const displayMovies = movies.map((movie) => {
    return (
      <div className="movie__container" key={movie.id}>
        <img
          src={`${BASE_URL}${movie.backdrop_path}`}
          alt={`${movie.original_name}`}
          loading="lazy"
        />

        <div className="movie__content">
          <p>{movie.title || movie.original_name}</p>
          <span
            onClick={() =>
              handleFavourite(
                movie.title,
                movie.original_name,
                movie.backdrop_path,
                movie.overview,
              )
            }
          >
            <i class="fas fa-plus"></i>
          </span>
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
