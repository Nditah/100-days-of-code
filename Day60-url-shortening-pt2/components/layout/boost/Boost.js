import React from "react";
import "./boost.css";

// Fix bg image

const Boost = () => {
  return (
      <div className="boost flex flex-col items-center bg-darkViolet py-10">
        <h1 className="text-white text-2xl font-bold">
          Boost your links today
        </h1>
        <button className="bg-cyan text-white py-3 px-8 my-4 rounded-full focus:outline-white hover:bg-lightCyan">
          Get Started
        </button>
      </div>
  );
};

export default Boost;
