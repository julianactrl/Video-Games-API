import React from "react";

const Filter = ({genres}) => {
  return (
    <>
      <select>
        <option>---Filter By---</option>
        <option value="api">Existed</option>
        <option value="created">Created</option>
        {/* {genres.map((g) => (
            <option value={g.name}>{g.name}</option>
        ))} */}
        {/* <option value="genre">Genre</option> */}
      </select>
    </>
  );
};

export default Filter;
