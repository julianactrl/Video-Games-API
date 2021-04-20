import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Card = ({ data }) => (
  <div className="card">
    <div className="image">
      <img src={data.image} alt='no image' />
    </div>
    <div className="detail">
      <h3>{data.name}</h3>
      <p>{data.genres && data.genres}</p>
      <div>
        <Link to={`/details/${data.id}`}>
          <button type="submit">More information</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Card;
