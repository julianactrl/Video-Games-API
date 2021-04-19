import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import mushroom from '../../assets/mushroom.png'
import { getAllGames } from "../../redux/actions";
import SearchBar from "../SearchBar";
import Cards from "../Cards";
import { Pagination } from "../Pagination";
import Order from "../Order";
import Filter from "../Filter";

const Inicio = () => {
  const dispatch = useDispatch();
  // Redux States
  const { games, search, loading, error } = useSelector((state) => state.gamesState);

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
  let page = games && games.slice(indexFirtsPage, indexLastPage);
  console.log("SOY PAGE LET", page);

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
              <Filter />
            </div>
            <div className="order">
              <Order />
            </div>
          </div>
        </div>
      </header>
      <h1 className="main-title">Discover all games we have for you</h1>
      <Cards games={games} loading={loading} error={error} search={search}/>
      <Pagination
        cardPerPage={cardPerPage}
        totalVideogames={games && games.length}
        pagination={pagination}
        key={"#"}
      />
    </div>
  );
};
export default Inicio;
