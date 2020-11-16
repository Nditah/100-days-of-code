import React from "react";
import './shorten.css'

// Fix bg image position
// Fix margin

const Shorten = () => {
  return (
    <div className="shorten container mx-auto flex flex-col justify-center h-32 px-6 my-4 bg-darkViolet rounded-lg">
      <form className="flex flex-col md:flex-row my-4">
        <input
          placeholder="Shorten a link here..."
          className="md:flex-1 md:mr-4 md:mb-0 mb-4 pl-4 py-2 rounded-lg focus:outline-white"
          type="text"
        />
        <input type="submit" value="Shorten it" className="cursor-pointer md:flex-0.2 bg-cyan text-white py-2 px-4 rounded-lg"
          
        />
      </form>
    </div>
  );
};


export default Shorten;
