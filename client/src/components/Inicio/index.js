import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actions";

import "./styles.css";
import mushroom from "../../assets/mushroom.png";

import SearchBar from "../SearchBar";
import Cards from "../Cards";
import { Pagination } from "../Pagination";
import Order from "../Order";
import Filter from "../Filter";

const Inicio = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const handleClick = () => history.push("/");
  const handleGame = () => history.push("/add");

  // Redux States
  const { games, search, loading, error } = useSelector(
    (state) => state.gamesState
  );
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const filterGames = useSelector((state) => state.filterGames);
  let allGames;

  useEffect(() => {
    dispatch(getAllGames());
  }, []);

  filterBy === "Filter By" && orderBy === "Order By"
    ? (allGames = games.slice())
    : (allGames = filterGames.slice());

  const pagination = (e, nro) => {
    e.preventDefault();
    setCurrentPage(nro);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(15);
  const indexLastPage = currentPage * cardPerPage;
  const indexFirtsPage = indexLastPage - cardPerPage;
  let page = allGames.slice(indexFirtsPage, indexLastPage);
  console.log(page);

  return (
    <div className="container_home">
      <header className="header">
        <button className="img" onClick={handleClick}>
          <img src={mushroom} alt="logo" />
        </button>
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="navbar">
          <div className="contenido">
            <div class="addGame">
              <button className="button_game" onChange={handleGame}>
                Add a new game
              </button>
            </div>
            <div className="filter">
              <Filter />
            </div>
            <div className="order">
              <Order />
            </div>
          </div>
        </div>
      </header>
      <h1 className="main-title">Discover all games we have for you</h1>
      <Cards games={page} loading={loading} error={error} search={search} />
      <Pagination
        cardPerPage={cardPerPage}
        totalVideogames={allGames.length}
        pagination={pagination}
        key={"#"}
      />
    </div>
  );
};
export default Inicio;
