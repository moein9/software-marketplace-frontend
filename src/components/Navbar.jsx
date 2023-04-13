import { useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingBasket } from "react-icons/fa";

function Navbar() {
  const count = useSelector((state) => state.counter.value);

  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { text: "About", href: "/about" },
    { text: "Products", href: "/products" },
    { text: "Pricing", href: "/pricing" },
    // { text: "Showcase", href: "#" },
    { text: "Developers", href: "/developers" },
    { text: "Support", href: "mailto:support@nermawala.com" },
  ];
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 font-bold text-lg bg-white rounded-br-lg rounded-bl-lg">
        <div className="flex justify-between h-16">
          <div className="flex items-center lg:w-auto">
            <Link to="/" className=" font-bold text-xl">
              Nermawala
            </Link>
          </div>
          {
            <Link to='/checkout'>
              <div className="flex items-center text-gray-600">
                <FaShoppingBasket className="absolute" />
                <span className="relative  p-4 font-bold text-purple-600">
                  {count}
                </span>
              </div>
            </Link>
          }
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.href}
                className=" hover:bg-gray-300 px-3 py-2 rounded-md font-semibold"
              >
                {link.text}
              </Link>
            ))}
            <Link
              to="/signup"
              className=" whitespace-nowrap bg-slate-800 hover:bg-green-700 text-white bg-mainbutton font-bold py-2 px-4 rounded"
            >
              Start finding
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-midnight hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-midnight"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-silver rounded p-4 m-4">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.href}
              className="hover:bg-gray-700 text-black  hover:text-white block px-3 py-2 rounded-md font-medium"
            >
              {link.text}
            </Link>
          ))}
          <a
            href="#"
            className="bg-green-500 hover:bg-green-700 font-bold block py-2 px-4 rounded"
          >
            Start finding
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
