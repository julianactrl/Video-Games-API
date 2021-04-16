import React from "react";
import Card from "../../components/Card";
import Loader from './../Loader'
import "./styles.css";


const Cards = ({games, loading, error})=> {
  console.log('SOY EL LOADING', loading)
  return (
    <div className="cards-container">
    <div className="cards">
      {loading ? <Loader /> : error ? <div>{error}</div> :  (
        games.map((data) => <Card data={data} />)
      )}
    </div>
    {/* <Loader /> */}
  </div>
  )
}
   

export default Cards;
