import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { getAllGames } from "../../redux/actions";
import SearchBar from "../SearchBar";
import Cards from "../Cards";
import { Pagination } from "../Pagination";

const Inicio = () => {
  const dispatch = useDispatch();
  // Redux States
  const games = useSelector((state) => state.games);
  console.log("SOY TODOS LOS GAMES DE LA API", games);

  let videogamesAll;

  useEffect(() => {
    console.log(dispatch(getAllGames()));
    console.log("render");
  }, []);

  // const pagination = (e, nro) => {
  //   e.preventDefault();
  //   setCurrentPage(nro);
  // }
  // const [currentPage, setCurrentPage] = useState(1); 
  // const [cardPerPage] = useState(10); 

  // const indexLastPage = currentPage * cardPerPage; 
  // const indexFirtsPage = indexLastPage - cardPerPage;  
  // let page = videogamesAll.slice(indexFirtsPage, indexLastPage);
  

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
      <main>
        <h1>Video Games Cards</h1>
        {/* <Cards games={page}/> */}
        {/* <Pagination 
          cardPerPage={cardPerPage}
          totalVideogames={videogamesAll.length}
          pagination={pagination}
        /> */}
      </main>
    </>
  );
};
export default Inicio;
