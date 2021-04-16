import React from "react";
import Card from "../../components/Card";
import "./styles.css";

const Cards = ({games})=> (
    <div className="full">
      <div className="showing">
        {games.length > 0 ? (
          games.map((data) => <Card data={data} />)
        ) : (
          <div>Not Found Games</div>
        )}
      </div>
    </div>
);

export default Cards;
