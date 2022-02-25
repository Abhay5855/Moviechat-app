import React from "react";
import "./navbar.css";
import Search from "./searchbar/Search";

const Navbar = () => {

    
  return (
    <nav>
      <ul>
        <li>Home</li>

        <li>
           <Search />
        </li>

        <li>Watchlist</li>

        <li>
          <div>
            <img
              src="https://scontent.fnag4-2.fna.fbcdn.net/v/t1.6435-9/p960x960/68615542_2382368328711243_690095807315050496_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=TxhLCu7CDOIAX_kmQIx&_nc_ht=scontent.fnag4-2.fna&oh=00_AT_nu6SP-qOoDP35ATNegNt0s1Q7FVamd21dptutx3N1Sw&oe=6231B67E"
              alt="logo"
              className="avatar"
            />
          </div>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
