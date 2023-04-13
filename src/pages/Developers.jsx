import React from "react";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import { developers } from "../services/data/developers.json"; // Import developer data

const DevelopersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Top Developers
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Check out our top developers and their successful software
          </p>
        </div>
        <div className="mt-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((developer) => (
              <li
                key={developer.id}
                className="bg-white rounded-lg shadow divide-y divide-gray-200"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium truncate">
                      {developer.name}
                    </h3>
                    <span className="inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {developer.ranking}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm truncate">
                    {developer.description}
                  </p>
                </div>
                <div className="flex p-6 space-x-4">
                  <div className="flex-1">
                    <a
                      href="#"
                      className="relative w-full inline-flex items-center justify-center py-2 text-sm font-medium text-gray-700 border border-transparent rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">View Software</span>
                    </a>
                  </div>
                  <div className="flex-1">
                    <a
                      href="#"
                      className="relative w-full inline-flex items-center justify-center py-2 text-sm font-medium text-gray-700 border border-transparent rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <StarIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">Feedback</span>
                    </a>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <p className="text-sm font-medium text-gray-500">
                    {developer.softwareSold} Successful Software
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevelopersPage;
