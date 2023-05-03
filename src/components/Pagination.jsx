import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Pagination({ itemsPerPage, totalItems, paginate }) {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setActivePage(number);
    paginate(number);
  };

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex border border-gray-300 rounded-md divide-x divide-gray-300">
        <li
          className={`px-3 py-2 hover:bg-gray-200 cursor-pointer ${
            activePage === 1 ? "disabled" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </li>
        <li
          className={`px-3 py-2 hover:bg-gray-200 cursor-pointer ${
            activePage === 1 ? "disabled" : ""
          }`}
          onClick={() => (activePage >= 2 ? handleClick(activePage - 1) : "")}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-3 py-2 hover:bg-gray-200 cursor-pointer ${
              activePage === number ? "bg-gray-200" : ""
            }`}
            onClick={() => handleClick(number)}
          >
            {number}
          </li>
        ))}
        <li
          className={`px-3 py-2 hover:bg-gray-200 cursor-pointer ${
            activePage === pageNumbers.length ? "disabled" : ""
          }`}
          onClick={() =>
            activePage < pageNumbers.length ? handleClick(activePage + 1) : ""
          }
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </li>
        <li
          className={`px-3 py-2 hover:bg-gray-200 cursor-pointer ${
            activePage === pageNumbers.length ? "disabled" : ""
          }`}
          onClick={() => handleClick(pageNumbers.length)}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
