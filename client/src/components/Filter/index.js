import React from "react";
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { } from "../../redux/actions";

const Filter = ({genres}) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.state)
  
  return (
    <div className="filter">
      <select>
        <option defaultValue>Filter By </option>
        <option value="api">Existed</option>
        <option value="created">Created</option>
        {/* {genres.map((g) => (
            <option value={g.name}>{g.name}</option>
        ))} */}
        {/* <option value="genre">Genre</option> */}
      </select>
    </div>
  );
};

export default Filter;
