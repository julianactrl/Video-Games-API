import React, { useState, useEffect } from "react";
import {searchGamesQuery} from '../../redux/actions'
import {useDispatch} from 'react-redux'
import './styles.css'



const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch()
	const limitPerPage = 15;
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    dispatch(searchGamesQuery(name, { limit: limitPerPage}))
  }
  return (
    <form className="form_search" onSubmit={handleSubmit}>
      <input
        className='input_search'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search videogame..."
        type="text"
      ></input>
      <button className="button_search" name="name" type="submit">
        Search 
      </button>
    </form>
  );
};

export default SearchBar;
