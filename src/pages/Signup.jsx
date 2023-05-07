import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCreateUserMutation } from "../redux/services/authSlice";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth || {});

  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const userData = {
      username,
      email,
      firstName,
      lastName,
      password,
    };

    try {
      await dispatch(createUser(userData)).unwrap();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className=" flex-col pt-96 m-4 h-96 flex justify-center items-center bg-white">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          First, let's get your account set up.
        </h2>
        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}{" "}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-800 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="username"
              className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="john"
              required
              value={username}
              onChange={handleInputChange}
            />
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
              value={email}
              onChange={handleInputChange}
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
                value={firstName}
                onChange={handleInputChange}
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
                value={lastName}
                onChange={handleInputChange}
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
              value={password}
              onChange={handleInputChange}
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
              className="whitespace-nowrap text-center bg-gray-900 text-xl hover:bg-green-700 text-white bg-mainbutton font-bold py-4 px-6 rounded-lg"
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
