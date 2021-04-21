import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import videoGame from "../../assets/video-games.png";
import mushroom from "../../assets/mushroom.png";


import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader";
import { getGamesById } from "./../../redux/actions";
import "./styles.css";

const CardDetails = ({ id }) => {
  let history = useHistory();

  const dispatch = useDispatch();
  const { gamesId, loading, error } = useSelector((state) => state.gamesById);
  console.log(error);

  useEffect(() => {
    dispatch(getGamesById(id));
  }, []);

 
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <header className="header_details">
          <button className="img" onClick={() => {history.goBack();}}>
            <img src={mushroom} alt="logo" />
          </button>
        </header>
        <div className="full">
          <h1>{gamesId.name}</h1>
          <div className="details">
            <div className="image">
              <img src={gamesId.image ? gamesId.image : videoGame} alt="no image" /> 
                
            </div>
            <div className="text">
              <h2>Description</h2>
              <p>{gamesId.description}</p>
            </div>
            <div className="released">
              <h2>Released</h2>
              <p>{gamesId.released}</p>
            </div>
            <div className="Genres">
              <div className="genres">
                <h2>Genres</h2>
                {gamesId.genres && gamesId.genres.map((g) => { return <p>{g.name}</p> })}
              </div>
            </div>
            <div className="Platforms">
              <div className="platforms">
                <h2>Platforms</h2>
                <p>{gamesId.platforms}</p>
              </div>
              <div className="ratingDiv">
                <div className="rating">
                  <h2>Rating</h2>
                  <p>{gamesId.rating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default CardDetails;
