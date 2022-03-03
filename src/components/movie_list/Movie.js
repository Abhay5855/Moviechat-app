import React, { useState, useEffect } from "react";
import "./movie.css";
import { useFetch } from "../hooks/useFetch";
import { db } from "../../firebase/firebase";
import { query, onSnapshot } from "firebase/firestore";


import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Movie = ({ title, trending }) => {
  const [movieId, setMovieId] = useState([]);

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const { isLoading, error, movies } = useFetch(`${trending}`);

  // Function to add the watch later movies
  const handleFavourite = async (movie) => {
    // conditional rendering to check whether title is present or not and appending the baseurl with the poster photo
    let selectTitle = movie.title || movie.original_name;
    let photo = BASE_URL + movie.backdrop_path;

    // Check for the id
    // const findMovie = movie.filter((o) => o.id !== watchedId.id);

    await addDoc(collection(db, "watch-later"), {
      id: movie.id,
      timestamp: serverTimestamp(),
      original: selectTitle,
      photoURL: photo,
      overview: movie.overview,
    })
      .then((res) => {})

      .catch((err) => {
        // console.log(err);
      });

    //  To flip through
  };

  // details/ options to play movie trailer

  useEffect(() => {
    function getWatchLater() {
      const movies = query(collection(db, "watch-later"));
      onSnapshot(movies, (QuerySnapshot) => {
        setMovieId(
          QuerySnapshot.docs.map((doc) => ({
            data: doc.data(),
          }))
        );
      });
    }

    getWatchLater();
  }, []);

  // console.log(movieId);
  // console.log(movieId);

  // Display the movies

  const displayMovies = movies.map((movie) => {
    return (
      <>
        <div className="movie__container" key={movie.vote_count}>
          <img
            src={`${BASE_URL}${movie.backdrop_path}`}
            alt={`${movie.original_name}`}
            loading="lazy"
          />

          <div className="movie__content">
            <p className="movie__title">{movie.title || movie.original_name}</p>

            {
            !movieId.find((item) => item.data.id == movie.id) ? (
              <span
                className="watchlist"
                onClick={() => handleFavourite(movie)}
              >
                <i class="fas fa-plus"></i>
                Add to Watchlist
              </span>
            ) : (
              <span className="delete">
                <i class="fas fa-trash"></i> Remove from watchlist
              </span>
            )}

            <p className="watchlist">
              <i class="fab fa-youtube"></i> Watch Trailer
            </p>
          </div>

      
        </div>
      </>
    );
  });

  //function to handle trailers

  return (
    <div>
      <h2 className="movie__desc">{title}</h2>

      <div className="movies__list">{displayMovies}</div>
    </div>
  );
};

export default Movie;
