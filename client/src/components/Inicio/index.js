import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import mushroom from '../../assets/mushroom.png'
import { getAllGames } from "../../redux/actions";
import SearchBar from "../SearchBar";
import Cards from "../Cards";
import { Pagination } from "../Pagination";

const Inicio = () => {
  const dispatch = useDispatch();
  // Redux States
  const { games, search, loading, error } = useSelector((state) => state.gamesState);

  let videogamesAll = games
  console.log("SOY LOS GAMES", games)

  useEffect(() => {
    console.log(dispatch(getAllGames()));
  }, []);

  const pagination = (e, nro) => {
    e.preventDefault();
    setCurrentPage(nro);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(15);

  const indexLastPage = currentPage * cardPerPage;
  const indexFirtsPage = indexLastPage - cardPerPage;
  let page = videogamesAll.slice(indexFirtsPage, indexLastPage);
  

  console.log(page);

  return (
    <div className="container">
      <header className="header">
        <div className="img">
          <img src={mushroom} alt="logo" />
        </div>
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="navbar">
          <div className="contenido">
            <div className="add">
              <Link to="/add">
                Add new game
              </Link>
            </div>
            <div className="filter">
              filter
            </div>
            <div className="order">
              order
            </div>
          </div>
        </div>
      </header>
      <h1 className="main-title">Discover all games we have for you</h1>
      <Cards games={page} loading={loading} error={error} search={search}/>
      <Pagination
        cardPerPage={cardPerPage}
        totalVideogames={videogamesAll.length}
        pagination={pagination}
        key={"#"}
      />
    </div>
  );
};
export default Inicio;
