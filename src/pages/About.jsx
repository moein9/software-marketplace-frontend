import React from "react";
import teamimg from "../assets/images/undraw_team_page_re_cffb.svg";

function About() {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-300 p-20 h-screen">
      <img src={teamimg} alt="" className="justify-center w-60 h-60 p-4" />
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Our Marketplace</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            ornare massa et eleifend sagittis.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ornare massa et eleifend sagittis.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Team</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ornare massa et eleifend sagittis.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ornare massa et eleifend sagittis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
