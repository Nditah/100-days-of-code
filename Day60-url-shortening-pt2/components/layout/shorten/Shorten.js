import React, { useContext, useEffect } from "react";
import "./shorten.css";
import validUrl from '../../../helpers/validUrl'
import ShortenContext from '../../../context/shortenContext'

// Fix bg image position
// Fix margin OK

const Shorten = () => {
  const shortenContext = useContext(ShortenContext);

  const { input, valid } = shortenContext;
  
  useEffect(() => {
    console.log(input);
  }, [])

  const onFormSubmit = (e) => {
    e.preventDefault();
    // If valid email
    if (validUrl(input)) {
      console.log('valid');
      shortenContext.setInput('');
      // If invalid email
    } else {
      console.log('invalid');
      shortenContext.setInput('');
    }
  }

  return (
    <div className="shorten-bg">
      <div className="px-4 container mx-auto">
        <div className="flex flex-col justify-center h-32 px-6 bg-darkViolet rounded-lg">
          <form onSubmit={(e) => onFormSubmit(e)}className="flex flex-col md:flex-row my-4">
            <input
              placeholder="Shorten a link here..."
              className="md:flex-1 md:mr-4 md:mb-0 mb-4 pl-4 py-2 rounded-lg focus:outline-white"
              type="text"
              onChange={(e) => shortenContext.setInput(e.target.value)}
              value={input}
            />
            <input
              type="submit"
              value="Shorten it"
              className="cursor-pointer md:flex-0.2 bg-cyan text-white py-2 px-4 rounded-lg hover:bg-lightCyan"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shorten;
