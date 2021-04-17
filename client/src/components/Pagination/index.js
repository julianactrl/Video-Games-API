import React from "react";
import "./styles.css";

export const Pagination = ({ cardPerPage, totalVideogames, pagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalVideogames / cardPerPage); i++) {
    pageNumbers.push(i); 
  }
  return (
    <div className="navPag">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={(e) =>  pagination(e, number)}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};