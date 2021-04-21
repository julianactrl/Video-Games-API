import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import videoGame from "../../assets/video-games.png";

const Card = ({ data }) => {
  let history = useHistory();
  const handleGetId = () => history.push(`/details/${data.id}`);
  
  return (
    <div className="card">
      <div className="image">
        <img src={data.image ? data.image : videoGame } alt="no image" />
      </div>
      <div className="detail">
        <h3>{data.name}</h3>
        <p>{data.genres && data.genres}</p>
        <div>
          <button onClick={handleGetId} type="submit">
            More information
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
