import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { text: "Products", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Showcase", href: "#" },
    { text: "Developers", href: "#" },
    { text: "Support", href: "#" },
  ];
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 font-bold text-lg bg-white rounded-br-lg rounded-bl-lg">
        <div className="flex justify-between h-16">
          <div className="flex items-center lg:w-auto">
            <a href="#" className=" font-bold text-xl">
              Nermawala
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="hover:bg-gray-700 px-3 py-2 rounded-md font-semibold"
              >
                {link.text}
              </a>
            ))}
            <a
              href="#"
              className=" whitespace-nowrap hover:bg-green-700 text-white bg-mainbutton font-bold py-2 px-4 rounded"
            >
              Start finding
            </a>
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
            <a
              key={link.text}
              href={link.href}
              className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium"
            >
              {link.text}
            </a>
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
