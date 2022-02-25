import React from "react";
import './search.css'

const Search = () => {
  return (
    <>
      <div className="nav__input">
        <form>
          <input type="text" placeholder="search" />
          <button className="search__btn">Search</button>
        </form>
      </div>
    </>
  );
};

export default Search;
