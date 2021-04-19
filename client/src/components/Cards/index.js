import React from "react";
import Card from "../../components/Card";
import Loader from "./../Loader";
import "./styles.css";

const Cards = ({search, games, loading, error }) => {
  return (
    <div className="cards-container">
      <div className="cards">
        {loading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : (
          games ? games.map((data, id) => <Card data={data} key={id} />) 
          :
          search ? search.map((d, i) => <Card data={d} key={i} />) 
          :
          <div>No works</div>
        )}
      </div>
    </div>
  );
};

export default Cards;
