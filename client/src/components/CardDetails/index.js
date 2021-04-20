import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader";
import { getGamesById } from "./../../redux/actions";
import "./styles.css";

const CardDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { gamesId, loading, error } = useSelector(
    (state) => state.gamesById
  );
  console.log(error);

  useEffect(() => {
    dispatch(getGamesById(id));
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="full">
          <div className="detailsContainer">
            <h1>{gamesId.name}</h1>
            <div className="details">
              <div className="image">
                <img src={gamesId.image} alt={gamesId.name} />
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
                  {gamesId.genres} 
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
        </div>
      )}
    </>
  );
};

export default CardDetails;
