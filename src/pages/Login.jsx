import React from "react";

const Login = () => {
  return (
    <div className=" bg-white flex flex-col justify-center ">
      <h1 className="text-3xl justify-center font-bold text-center items-center pt-40 pb-20 ">
        Welcome back!
      </h1>
      <div className="flex flex-row justify-center">
        <div className=" content-end w-1/3 px-6 py-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full p-2 h-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full p-2 h-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
