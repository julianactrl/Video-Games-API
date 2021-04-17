import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search videogame..."
        type="text"
      ></input>
      <button className="button-search" name="name" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
