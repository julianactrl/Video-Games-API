import React, { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { getGamesById } from './../../redux/actions'
import "./styles.css";

const CardDetails = ({id}) => {
  // const [id, setId] = useState();
  // const idGame = useParams();
  const dispatch = useDispatch()
  const gamesId = useSelector((state) => state.gamesById.gamesId);
  console.log(gamesId)
  
  useEffect(() => {
    dispatch(getGamesById(id))
  }, [])

  return (
    <>
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
                {gamesId.genres &&
                  gamesId.genres.map((g) => {
                    return <p>{g.name}</p>;
                  })}
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
    </>
  );
};

export default CardDetails;
