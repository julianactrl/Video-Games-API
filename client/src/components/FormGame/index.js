import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGenresDb, postNewGame } from "../../redux/actions";
import "./styles.css";
import swal from "sweetalert";

const FormGame = () => {
  const history = useHistory()

  const initGame = {
    name: "",
    description: "",
    released: "",
    rating: 0,
    genres: [],
    platforms: "",
  }
  const [game, setGame] = useState(initGame)

  const dispatch = useDispatch()
  const genresRedux = useSelector((state) => state.genresState.genres)

  useEffect(() => {
    dispatch(getGenresDb())
  }, [])

  const gameDb = (e) => {
    e.preventDefault()
    const gameSend = {
      name: game.name,
      description: game.description,
      released: game.released,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms,
    }
    dispatch(postNewGame(gameSend))
    e.target.reset();
    swal("Game created succesfully!", {
      buttons: false,
      timer: 1000,
    })
  }

  const handleInputChange = (e) => {
    if (e.target.name === "genres") {
      const arr = game[e.target.name];
      setGame({
        ...game,
        [e.target.name]: arr.concat(e.target.value),
      });
    } else {
      setGame({
        ...game,
        [e.target.name]: e.target.value,
      })
    }
  }  

  return (
    <div className="container_form">
      <form id="form_game" onSubmit={(e) => gameDb(e)}  onChange={(e) => handleInputChange(e)}>
        <h3>Create your video game</h3>
        <h4>Use your imagination</h4>
        <fieldset>
          <input
            value={game.name}
            name="name"
            placeholder="Give it a name"
            type="text"
            tabIndex="1"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <textarea
            value={game.description}
            name="description"
            type="text"
            placeholder="Tell us what about is it..."
            tabIndex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <input
            value={game.released}
            name="released"
            placeholder="Released"
            type="date"
            tabIndex="3"
            required
          />
        </fieldset>
        <fieldset>
          <input
            value={game.rating}
            name="rating"
            placeholder="Rating"
            type="number"
            tabIndex="4"
            required
          />
        </fieldset>
        <fieldset>
          <input
            value={game.platforms}
            name="platforms"
            placeholder="What Platforms are going hold"
            type="text"
            tabIndex="5"
            required
          ></input>
        </fieldset>
        <fieldset className="select_field">
          <label>Select the genres for your game</label>
          <select className="select_genres" multiple={true}>
            {genresRedux && genresRedux.map((g) => (
              <option
                value={g.name}
                name="genres"  
                key={g.id}
              >
                {g.name}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            onClick={() => {
              history.goBack();
            }}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default FormGame;
