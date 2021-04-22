import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenresDb,
  filterByGenres,
  filterBySource,
} from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genresState.genres);

  useEffect(() => {
    dispatch(getGenresDb());
  }, []);

  const handleFilter =  (e) => {
    if (e.target.value === "Api" || e.target.value === "Created") {
      dispatch(filterBySource(e.target.value));
    } else {
       dispatch(filterByGenres(e.target.value));
    }
  };

  return (
    <div className="filter">
      <select onChange={handleFilter}>
        <option defaultValue>Filter By </option>
        <option value="Api">Existed</option>
        <option value="Created">Created</option>
        {genres.map((g, id) => (
          <option key={id} value={g.name}>
            {g.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
