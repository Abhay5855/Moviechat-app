import {
  collection,
  getDocs,
  onSnapshot,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { db } from "../../firebase/firebase";
import "./watchlater.css";

const WatchLater = () => {
  //a state to store all the movies addedd by firebase in the watch-later section.

  const [watchLater, setWatchLater] = useState([]);

  useEffect(() => {
    const movies = query(collection(db, "watch-later"));
    onSnapshot(movies, (QuerySnapshot) => {
      setWatchLater(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  console.log(watchLater);

  // Display the watch later movies
  const displayWatchlater = watchLater.map((movie) => {
    return <div key={movie.id} className="watchlater__container">

        
          <img src={movie.data.photoURL}  alt={movie.data.original} loading='lazy'/>
        
        <div>
          <p className="title">{movie.data.original}</p>
          <p className="overview">overview : {movie.data.overview}</p>
          <span className="remove"><i class="fas fa-trash"></i> Remove from watchlist</span>
        </div>
        
          

    </div>;
  });

  return (
    <div>
      <Navbar />
      <div className="watchlist__container">
        <h2 className="watchlist">Watchlist</h2>
      </div>

        <div className="watchlist__movies">
          {displayWatchlater}
        </div>
    </div>
  );
};

export default WatchLater;
