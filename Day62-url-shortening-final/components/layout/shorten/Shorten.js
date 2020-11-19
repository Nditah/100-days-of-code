import React, { useContext } from "react";
import "./shorten.css";
import ShortenContext from "../../../context/shortenContext";

const Shorten = () => {
  const shortenContext = useContext(ShortenContext);

  const { loading, input, results } = shortenContext;

  // Copy to clipboard
  function copy(e) {
    e.target.textContent = "Copied!";
    e.target.classList.add("bg-darkViolet");
    e.target.classList.remove("hover:bg-lightCyan");
    setTimeout(() => {
      e.target.textContent = "Copy";
      e.target.classList.remove("bg-darkViolet");
      e.target.classList.add("hover:bg-lightCyan");
    }, 2000);
    navigator.clipboard.writeText(e.target.previousSibling.textContent);
  }

  // On form submit
  const onFormSubmit = async (e) => {
    e.preventDefault();
    shortenContext.setLoading(true);

    await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          // Valid email
          shortenContext.setResults((results) => [
            ...results,
            {
              result: data.result.short_link,
              original: data.result.original_link,
            },
          ]);

          console.log(data.result.short_link);
        } else {
          // Invalid email
          document.querySelector(".shortenInput").classList.add("border-4");
          document.querySelector(".shortenInput").classList.add("border-red");
          document.querySelector(".shortenInput").classList.remove("mb-4");
          document.querySelector(".addLink").classList.remove("hidden");
          setTimeout(() => {
            document
              .querySelector(".shortenInput")
              .classList.remove("border-4");
            document.querySelector(".shortenInput").classList.add("mb-4");
            document
              .querySelector(".shortenInput")
              .classList.remove("border-red");
            document.querySelector(".addLink").classList.add("hidden");
          }, 2000);
        }
      });

    shortenContext.setInput("");

    shortenContext.setLoading(false);
  };

  return (
    <div className="bg-gray-300">
      <div className="px-4 shorten-bg">
        <div className="container mx-auto pb-4">
          <div className="flex flex-col justify-center h-32 px-6 bg-darkViolet rounded-lg">
            <form
              onSubmit={(e) => onFormSubmit(e)}
              className="flex flex-col md:flex-row my-4"
            >
              <div className="block md:flex md:flex-col md:mr-4 w-full">
                <input
                  placeholder="Shorten a link here..."
                  className="shortenInput md:flex-1 md:mb-0 mb-4 pl-4 py-2 w-full rounded-lg focus:outline-white"
                  type="text"
                  onChange={(e) => shortenContext.setInput(e.target.value)}
                  value={input}
                />
                <h1 className="addLink text-red text-sm my-1 hidden">
                  Plase add a link
                </h1>
              </div>
              <input
                type="submit"
                value="Shorten it"
                className="cursor-pointer md:flex-0.2 bg-cyan text-white py-2 px-4 h-10 max-h-10 rounded-lg hover:bg-lightCyan"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 px-4">
        <div className="container mx-auto">
          {loading && (
            <div className="flex justify-center mt-4">
              <div className="snippet" data-title=".dot-flashing">
                <div className="stage">
                  <div className="dot-flashing"></div>
                </div>
              </div>
            </div>
          )}
          {results.length > 0 &&
            results.map((el, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 mt-3 rounded-md text-sm sm:text-base"
              >
                <a href={el.original} target="_blank">
                  {el.original}
                </a>
                <div className="flex items-center">
                  <a
                    className="text-cyan mr-3 hidden sm:block"
                    href={el.result}
                    target="_blank"
                  >
                    {el.result}
                  </a>
                  <button
                    onClick={(e) => copy(e)}
                    className="bg-cyan text-white text-sm py-1 px-5 rounded-lg focus:outline-white hover:bg-lightCyan"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shorten;
