import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="header">
        <h1>Admin Page</h1>

        <Link to="/genre">
          <button className="genre btn">List Genre</button>
        </Link>
        <Link to="/movies">
          <button className="movies btn">Movies</button>
        </Link>
      </div>
    </>
  );
}
