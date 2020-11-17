import React from "react";
import logo from "../../../assets/logo.svg";

// Fix hamburger menu on click

const Nav = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between flex-wrap my-4 relative">
      <div className="flex">
        <img className="mr-10" src={logo} alt="logo" />
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto hidden">
          <div className="text-sm md:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-veryDarkViolet font-extrabold mr-4"
            >
              Features
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-veryDarkViolet font-extrabold mr-4"
            >
              Pricing
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-veryDarkViolet font-extrabold"
            >
              Resources
            </a>
          </div>
        </div>
      </div>
      {/* Hamburger */}
      <div className="block md:hidden">
        <button className="flex flex-col items-center px-3 py-2 focus:outline-white">
          <div className="w-6 h-1 bg-grayishViolet"></div>
          <div className="w-6 h-1 bg-grayishViolet mt-1"></div>
          <div className="w-6 h-1 bg-grayishViolet mt-1"></div>
        </button>
        {/* Dropdown */}
        <div
          style={{
            width: "85%",
            height: '300px' 
          }}
          className="absolute hidden left-0 right-0 ml-auto mr-auto text-center rounded-xl bg-darkViolet text-white px-10 py-10"
        >
          <ul className="h-full flex flex-col justify-between">
            <li><a href="#Features">Features</a></li>
            <li><a href="#Features">Pricing</a></li>
            <li><a href="#Features">Resources</a></li>
            <hr/>
            <li><a href="#Features">Login</a></li>
            <button className="text-sm cursor-pointer bg-cyan text-white py-2 px-4 rounded-2xl hover:bg-lightCyan">
          Sign Up
        </button>
          </ul>
        </div>
      </div>
      <div className="hidden md:block md:flex md:items-center">
        <h1 className="cursor-pointer text-sm text-gray-700 font-bold mr-4 hover:text-veryDarkViolet">
          Login
        </h1>
        <button className="text-sm cursor-pointer bg-cyan text-white py-2 px-4 rounded-2xl hover:bg-lightCyan">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
