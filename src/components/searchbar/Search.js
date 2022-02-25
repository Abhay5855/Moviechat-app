import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./search.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(true);

  // Using the input ref
  const inputRef = useRef();

  const SearchURL =
    "https://api.themoviedb.org/3/search/movie?api_key=d97b3e0257a2c71f178ef69c4ca4f27c&query=";

  useEffect(() => {
    

      const unsubscribe = setTimeout(() => {

        axios
        .get(SearchURL + searchMovie)
        .then((response) => {
          console.log(response);
          setLoading(false);
        })

        .catch((err) => {
          console.log(err);
        });
         

      }, 4000);

     return () => clearTimeout(unsubscribe);
          

     
  }, [searchMovie , inputRef]);

  return (
    <>
      <div className="nav__input">
        <input
          type="text"
          placeholder="search"
          ref={inputRef}
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <Link
          to={{
            pathname: "/",

            state: {},
          }}
        >
          <button className="search__btn">Search</button>
        </Link>
      </div>
    </>
  );
};

export default Search;
