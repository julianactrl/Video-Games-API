import React from "react";
import Card from "../../components/Card";
import "./styles.css";

const Cards = (props) => (
    <div className="full">
      <div className="showing">
        {props.videogames.length > 0 ? (
          props.videogames.map((data) => <Card data={data} />)
        ) : (
          <div>Not Found Games</div>
        )}
      </div>
    </div>
);

export default Cards;
