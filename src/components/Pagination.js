import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const pageLinks = [];
  for (let i = 1; i <= props.pages + 1; i++) {
    pageLinks.push(
      <li className="text-yellow-400 px-4" key={i}>
        <Link
          to="#"
          className="rounded-full border-2 border-yellow-200  w-10 h-10 flex items-center justify-center "
        >
          {props.currentPage}
        </Link>
      </li>
    );
  }
  return (
    <div className="flex justify-center">
      <ul className="inline-flex items-center">
        {props.currentPage > 1 ? (
          <li onClick={() => props.nextPage(props.currentPage - 1)}>
            <Link to="#">Prev</Link>
          </li>
        ) : (
          ""
        )}
        {pageLinks.slice(0, 1)}
        {props.currentPage < props.pages + 1 ? (
          <li onClick={() => props.nextPage(props.currentPage + 1)}>
            <Link to="#">Next</Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Pagination;
