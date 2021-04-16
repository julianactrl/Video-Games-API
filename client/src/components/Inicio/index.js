import React, {useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { getAllGames } from "../../redux/actions"
import SearchBar from "../SearchBar";
import Cards from '../Cards'
import "./styles.css";

const Inicio = () => {
  const getGamesAll = useSelector(state => state.games)
  console.log("SOY TODOS LOS GAMES DE LA API", getGamesAll)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(dispatch(getGamesAll()));
    console.log("render")
  }, [])

  return (
    <>
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
      <body>
          <Cards getAllGames={getAllGames}/>
      </body>
    </>
  );
};
export default Inicio;
