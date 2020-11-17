import React from "react";
import "./header.css";
import illustration from "../../../assets/illustration-working.svg";

// Fix illustration positioning OK
// Fix heights OK

const Header = () => {
  return (
    <div className="container mx-auto px-4 md:py-24 py-10 gridHeader">
      <div className="textDiv flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center md:items-start justify-center">
          <h1 className="text-3xl md:text-6xl font-semibold text-veryDarkViolet text-center md:text-left leading-tight mt-4">
            More than just shorter links
          </h1>
          <p className="text-md text-gray-700 text-center md:text-left my-3">
            Build your brand's recognition and get detailed insight on how your
            links are performing
          </p>
          <button className="bg-cyan text-white py-3 px-4 rounded-full focus:outline-white hover:bg-lightCyan">
            Get Started
          </button>
        </div>
      </div>
      <div className="imgDiv flex-10 flex justify-center items-center">
        <img className="img" src={illustration} alt="illustration" />
      </div>
    </div>
  );
};

export default Header;
