import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { getAllGames } from "../../redux/actions";
import SearchBar from "../SearchBar";
import Cards from "../Cards";
import { Pagination } from "../Pagination";

const Inicio = () => {
  const dispatch = useDispatch();
  // Redux States
  const {games, loading, error} = useSelector((state) => state.gamesState);
  
  let videogamesAll = games;

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
        <div className="form">
          <Link to="/form">
            <h2>Add a new game</h2>
          </Link>
        </div>
        <SearchBar />
      </header>
      <h1>Discover all games we have for you</h1>
      <Cards games={page} loading={loading} error={error} />
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
