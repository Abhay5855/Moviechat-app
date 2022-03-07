import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../authentication/Signup";
import Container from "../container/Container";
import Movie from "../movie_list/Movie";
import Navbar from "../Navbar";
import Search from "../searchbar/Search";
import WatchLater from "../watch_later/WatchLater";

const MainApp = () => {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Signup />} />

          <Route path="/home" element={<Container />} />

          <Route path="/watch-later" element={<WatchLater />} />

          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainApp;
