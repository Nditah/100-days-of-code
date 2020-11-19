import React from "react";
import "./statistics.css";
import recognition from "../../../assets/icon-brand-recognition.svg";
import records from "../../../assets/icon-detailed-records.svg";
import customizable from "../../../assets/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="wrap flex justify-center items-center bg-gray-300 text-veryDarkViolet py-8 px-4">
      <div className="line"></div>
      <div className="container mx-auto ">
        <div className="my-6 flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Advanced Statistics</h1>
          <p style={{maxWidth:'50%'}} className="text-gray-700 text-center">
            Track how your links are performing across the web with out advanced
            statistics dashboard.
          </p>
        </div>
        <div className="md:flex py-10 text-center lg:text-left">
          <div className="card md:flex-1 bg-white rounded-lg p-10">
            <div className="flex justify-center">
              <img
                className="card-img bg-darkViolet p-4 rounded-full"
                src={recognition}
                alt="recognition"
              />
            </div>
            <div className="flex flex-col lg:items-start">
            <h1 className="text-xl font-bold">Brand Recognition</h1>
            <p className="text-gray-700">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
            </div>
          </div>
          <div className="card md:flex-1 bg-white rounded-lg p-10 my-16 md:my-0 md:mx-6 md:mt-5">
            <div className="flex justify-center">
              <img
                className="card-img bg-darkViolet p-4 rounded-full"
                src={records}
                alt="records"
              />
            </div>
            <h1 className="text-xl font-bold">Detailed Records</h1>
            <p className="text-gray-700">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card md:flex-1 bg-white rounded-lg p-10 md:mt-10">
            <div className="flex justify-center items-center ">
              <img
                className="card-img bg-darkViolet p-3 rounded-full"
                src={customizable}
                alt="customizable"
              />
            </div>
            <h1 className="text-xl font-bold">Fully Customizable</h1>
            <p className="text-gray-700">
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
