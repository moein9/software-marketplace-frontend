import React, { useRef } from "react";
import heroimg from "../assets/images/herosection.png";
import { Link } from "react-router-dom";

const Landing = () => {
  const signRef = useRef(null);

  const handleScroll = () => {
    signRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-slate-900">
        <div className="flex  justify-around items-center w-screen  py-52   bg-gray-900 ">
          <div className=" flex flex-col m-2 p-2">
            <h1 className=" text-5xl text-white font-bold">
              Build a successful <br />
              business.
            </h1>
            <h1 className="text-5xl text-black font-bold w-28 bg-yellow-400 rounded-sm">
              Fast.
            </h1>
            <h3 className="text-gray-400 py-4 text-1xl">
              Advanced software marketplace for every one who <br />
              desire to find the best product
            </h3>
            <a
              href="#"
              className=" whitespace-nowrap text-center bg-slate-800 text-xl hover:bg-green-700 text-white bg-mainbutton font-bold py-4 rounded w-36"
            >
              Start finding
            </a>
          </div>
          <div className="  hidden   lg:flex  relative bg-opacity-75 bg-blue-900 h-80 w-[33rem] hover:bg-gray-400 hover:grayscale-[10%]  transition-all rounded-lg ">
            <div className=" absolute  h-[40rem] bottom-[-10rem] hover:grayscale-[30%] hover:h-[42rem] duration-700 hover:left-40 transition-all left-56 w-[46rem]  transform -translate-x-80 ">
              <img src={heroimg} alt="" className=" w-full object-cover" />
            </div>
          </div>
        </div>
        <div
          onMouseOver={handleScroll}
          className="  animate-bounce   bg-gray-900 w-screen "
        >
          <div className="p-4 bg-gray-900   rounded-full flex flex-col justify-center items-center">
            <div className="   w-2 h-2  rounded-full bg-white transform rotate-45"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="  flex justify-center h-4 w-8 text-white cursor-pointer hover:text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 0 1 .75.75v8.5l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06L9.25 12v-8.5A.75.75 0 0 1 10 3z"
              />
            </svg>
          </div>
        </div>
        <div
          ref={signRef}
          className="flex flex-col justify-center  items-center w-full bg-gray-900 "
        >
          <div className="flex flex-col items-center justify-center   rounded-lg p-8">
            <h1 className="text-4xl text-white font-bold">
              Signup now to build a robust software
            </h1>
          </div>
        </div>

        <div className="flex justify-center items-center h-full">
          <div className="flex mb-4 ">
            <Link
              href="/login"
              className="whitespace-nowrap text-center bg-slate-800 text-xl hover:bg-green-700 text-white bg-mainbutton font-bold py-4 px-6 rounded-l"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="whitespace-nowrap text-center bg-slate-800 text-xl hover:bg-green-700 text-white bg-mainbutton font-bold py-4 px-6 rounded-r"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
