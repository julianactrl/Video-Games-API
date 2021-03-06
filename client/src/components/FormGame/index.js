import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGenresDb, postNewGame } from "../../redux/actions";
import "./styles.css";
import swal from "sweetalert";
// import { useForm } from "react-hook-form";
import mushroom from "../../assets/mushroom.png";

const FormGame = () => {
 

  const history = useHistory();
  const handleForm = () => history.goBack();

  const initGame = {
    name: "",
    description: "",
    released: "",
    rating: 0,
    genres: [],
    platforms: "",
  };
  const [game, setGame] = useState(initGame);
  const dispatch = useDispatch();
  const genresRedux = useSelector((state) => state.genresState.genres);

  useEffect(() => {
    dispatch(getGenresDb());
  }, []);

  const gameDb = (e) => {
    e.preventDefault();
    const gameSend = {
      name: game.name,
      description: game.description,
      released: game.released,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms,
    };
    dispatch(postNewGame(gameSend));
    e.target.reset();
    swal("Game created succesfully!", {
      buttons: false,
      timer: 3000,
    });
  };

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
      });
    }
  };


  return (
    <div className="background">
      <header className="header_details">
        <button
          className="img"
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={mushroom} alt="logo" />
        </button>
      </header>
      <div className="container_form" >
        <form id="form_game" onSubmit={gameDb}>
          <h3>Create your video game</h3>
          <h4>Use your imagination</h4>
          <fieldset>
          <label>Name</label>
            <input
              value={game.name}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              value={game.description}
              name="description"
              type="text"
              placeholder="Tell us what about is it..."
              tabIndex="2"
              autoFocus
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <input
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
            <span className="select_genres">
              {genresRedux.map((g) => (
                <div key={g.id}>
                  <label className="container_checkbox">
                    {g.name}
                    <input
                      tabIndex="6"
                      onChange={handleInputChange}
                      type="checkbox"
                      name="genres"
                      value={g.name}
                    ></input>
                    <span className="checkmark"></span>
                  </label>
                </div>
              ))}
            </span>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              onClick={handleForm}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FormGame;
