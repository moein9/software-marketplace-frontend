import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className=" flex-col pt-96 m-4 h-96 flex justify-center items-center bg-white">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          First, let's get your account set up.
        </h2>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-800 font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
              <label
                className="block text-gray-800 font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div className="w-1/2 px-2">
              <label
                className="block text-gray-800 font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block text-gray-800 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue"
            >
              Next
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <h3 className="py-8 "> do you already have an account ? </h3>
        <div className="  animate-bounce rounded-full   h-8  ">
          <div className="   rounded-full flex flex-col justify-center items-center">
            <div className="   w-2 h-2  rounded-full bg-black transform rotate-45"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="  flex justify-center h-4 w-8 text-black cursor-pointer "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 0 1 .75.75v8.5l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06L9.25 12v-8.5A.75.75 0 0 1 10 3z"
              />
            </svg>
          </div>
          <div className=" rounded-full flex justify-center items-center ">
            <Link
              to="/login"
              className="whitespace-nowrap text-center bg-gray-900 text-xl hover:bg-green-700 text-white bg-mainbutton font-bold py-4 px-6 rounded-l"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
