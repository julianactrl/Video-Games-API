import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenresDb } from "../../redux/actions";
import "./styles.css";

const FormGame = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genresState.genres);
  useEffect(() => {
    dispatch(getGenresDb());
  }, []);

  // name, description, released, rating, platforms, genres
  return (
    <div class="container_form">
      <form id="form_game" action="" method="post">
        <h3>Create your own video game</h3>
        <h4>Use your imagination</h4>
        <fieldset>
          <input
            placeholder="Give it a name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Tell us what about is it..."
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <input placeholder="Released" type="date" tabindex="3" required />
        </fieldset>
        <fieldset>
          <input placeholder="Rating" type="number" tabindex="4" required />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="What Platforms are going hold"
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <label>Select the genres for your game</label>
          <select multiple>
            {genres.map((g, id) => (
              <option key={id}>{g.name}</option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default FormGame;
