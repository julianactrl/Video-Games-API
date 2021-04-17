import React from "react";
import Card from "../../components/Card";
import Loader from "./../Loader";
import "./styles.css";

const Cards = ({ games, loading, error }) => {
  return (
    <div className="cards-container">
      <div className="cards">
        {loading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : (
          games.map((data, id) => <Card data={data} key={id} />)
        )}
      </div>
    </div>
  );
};

export default Cards;
