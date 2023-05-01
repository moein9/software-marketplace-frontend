import React, { useState } from "react";

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
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-3 py-2 hover:bg-gray-200 ${
              activePage === number ? "bg-gray-200" : ""
            }`}
          >
            <button
              className="focus:outline-none"
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
