import React, {useEffect} from "react";
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { getGenresDb } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch()
  const genres = useSelector(state => state.genresState.genres)
  
  useEffect(() => {
    dispatch(getGenresDb())
  }, [])

  const handleGenres = (e) => {
    
  }

  return (
    <div className="filter">
      <select>
        <option defaultValue>Filter By </option>
        <option value="api">Existed</option>
        <option value="created">Created</option>
        {genres.map((g) => (
            <option value={g.name}>{g.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
