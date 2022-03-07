import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../authentication/Signup";
import Container from "../container/Container";
import SearchPage from "../searchPage/SearchPage";
import WatchLater from "../watch_later/WatchLater";

const MainApp = () => {

  const [movieId, setMovieId] = useState([]);

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Signup />} />

          <Route path="/home" element={<Container />} />

          <Route path="/watch-later" element={<WatchLater />} />

          <Route path="/search" element={<SearchPage/>} movieId={movieId} setMovieId={setMovieId}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainApp;
