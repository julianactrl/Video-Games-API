import React, { useState } from "react";
import { searchGamesQuery } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "./styles.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const limitPerPage = 15;

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    dispatch(searchGamesQuery(name, { limit: limitPerPage }));
  };
  return (
    <form className="wrap" onSubmit={handleSubmit}>
      <div className="search">
        <input
          className="searchTerm"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="What are you looking for?"
          type="text"
        ></input>
        <button className="searchButton" name="name" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
