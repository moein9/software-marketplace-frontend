import React from "react";
import heroimg from "../assets/images/herosection.png";

const Landing = () => {
  return (
    <>
      <div className="flex  justify-around items-center w-screen h-screen py-40   bg-gray-900 ">
        <div className=" flex flex-col ">
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
        <div className=" relative bg-opacity-75 bg-blue-900 h-80 w-[33rem] hover:bg-gray-400 hover:grayscale-[10%]  transition-all rounded-lg">
          <div className=" absolute h-[40rem] bottom-[-10rem] hover:grayscale-[30%] hover:h-[42rem] duration-700 hover:left-40 transition-all left-56 w-[46rem]  transform -translate-x-80">
            <img src={heroimg} alt="" className=" w-full object-cover " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
