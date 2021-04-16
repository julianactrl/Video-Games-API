import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

const Card = ({ data }) => (
    <div className="card">
      <div className="image">
        <img src={data.image} alt={data.name} />
        <div className="detail">
          <h3>{data.name}</h3>
          <div className="genres">
            <h4>{data.genres && data.genres}</h4>
            <div className="button">
              <Link to={`/videogames/${data.id}`}>
                <button type="submit">More information</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Card;