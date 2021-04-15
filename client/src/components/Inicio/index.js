import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";
import './styles.css'
const Inicio = () => {
  return (
    <header className="header">
      <div className="form">
        <Link to="/form">
          <h2>Add a new game</h2>
        </Link>
      </div>
      <div className="searchBar">
        <SearchBar />
      </div>
     
    </header>
  );
};
export default Inicio;
