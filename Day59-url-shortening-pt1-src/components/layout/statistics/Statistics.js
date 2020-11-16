import React from "react";
import recognition from "../../../assets/icon-brand-recognition.svg";
import records from "../../../assets/icon-detailed-records.svg";
import customizable from "../../../assets/icon-fully-customizable.svg";

// Add bg color (gray)
// Position icons

const Statistics = () => {
  return (
    <div className="text-center px-4 bg-gray-300 text-veryDarkViolet">
        <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Advanced Statistics</h1>
      <p className="text-grayishViolet">
        Track how your links are performing across the web with out advanced
        statistics dashboard.
      </p>
      <div className="md:flex">
      <div className="bg-white mt-4 rounded-lg px-10 py-4">
        <div className="card flex justify-center">
        <img className="card-img bg-darkViolet px-4 py-4 rounded-full" src={recognition} alt="recognition" />
        </div>
        <h1 className="text-xl font-bold">Brand Recognition</h1>
        <p className="text-grayishViolet">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div >
      <div className="bg-white mt-4 rounded-lg px-10 py-4">
      <div className="card flex justify-center">
        <img className="card-img bg-darkViolet px-4 py-4 rounded-full" src={records} alt="records" />
       </div>
        <h1 className="text-xl font-bold">Detailed Records</h1>
        <p className="text-grayishViolet">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className="bg-white mt-4 rounded-lg px-10 py-4">
      <div className="card flex justify-center">
        <img className="card-img bg-darkViolet px-4 py-4 rounded-full" src={customizable} alt="customizable" />
        </div>
        <h1 className="text-xl font-bold">Fully Customizable</h1>
        <p className="text-grayishViolet">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
      </div>
        </div>
    </div>
  );
};

export default Statistics;
