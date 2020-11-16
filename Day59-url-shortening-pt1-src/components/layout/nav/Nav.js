import React from "react";
import logo from "../../../assets/logo.svg";

// Fix hamburger menu on click
// Fix illustration positioning
// Fix heights

const Nav = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between flex-wrap my-4">
      <img src={logo} alt="logo" />
      <div className="block lg:hidden">
        <button className="flex flex-col items-center px-3 py-2 focus:outline-white">
          <div className="w-6 h-1 bg-grayishViolet"></div>
          <div className="w-6 h-1 bg-grayishViolet mt-1"></div>
          <div className="w-6 h-1 bg-grayishViolet mt-1"></div>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-grayishViolet font-extrabold mr-4"
          >
            Features
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-grayishViolet font-extrabold mr-4"
          >
            Pricing
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-grayishViolet font-extrabold"
          >
            Resources
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
