import React from "react";
import "./navbar.css";
import Search from "./searchbar/Search";
import { Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const Navbar = () => {
  const { user, GoogleSignOut} = useAuth();



  return (
    <nav>
      <ul>
        <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
          <li>
            <p>Home</p>
          </li>
        </Link>

        <li>
          <Search />
        </li>

        <Link
          to="/watch-later"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <li className="watch_later">
            <p>Watchlist</p>
          </li>
        </Link>

        <li>
          <div>
            <img
              src={user.photoURL}
              alt="logo"
              className="avatar"
              onClick={GoogleSignOut}
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
