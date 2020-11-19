import React from "react";

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start bg-veryDarkBlue text-white p-10 md:pt-20 md:pb-20">
        <div className="flex-1">
          <h1 className="text-4xl font-medium">Shortly</h1>
        </div>
        <div className="flex-1 text-center md:text-left md:flex pt-3 ">
          <div className="lg:pr-16 md:pr-10">
            <h3 className="text-md">Features</h3>
            <ul className="py-2">
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#shortening"
                >
                  Link Shortening
                </a>{" "}
              </li>
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#branded"
                >
                  Branded Links
                </a>{" "}
              </li>
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#analytics"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:pr-16 md:pr-10">
            <h3 className="text-md">Resources</h3>
            <ul className="py-2">
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#shortening"
                >
                  Blog
                </a>{" "}
              </li>
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#branded"
                >
                  Developers
                </a>{" "}
              </li>
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#analytics"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:pr-16 md:pr-10">
            <h3 className="text-md">Company</h3>
            <ul className="py-2">
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#shortening"
                >
                  About
                </a>{" "}
              </li>
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#branded"
                >
                  Our Team
                </a>{" "}
              </li>
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#analytics"
                >
                  Carrers
                </a>
              </li>
              <li>
                <a
                  className="text-xs text-gray-500 hover:text-cyan"
                  href="#analytics"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:justify-end my-4 md:my-0 flex-1 pt-4">
          <i className="fab fa-facebook-square cursor-pointer fa-2x px-2 text-white hover:text-cyan"></i>
          <i className="fab fa-twitter cursor-pointer fa-2x px-2 text-white hover:text-cyan"></i>
          <i className="fab fa-pinterest cursor-pointer fa-2x px-2 text-white hover:text-cyan"></i>
          <i className="fab fa-instagram cursor-pointer fa-2x px-2 text-white hover:text-cyan"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
