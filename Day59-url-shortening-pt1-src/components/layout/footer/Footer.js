import React from "react";
import instagram from "../../../assets/icon-instagram.svg";
import facebook from "../../../assets/icon-facebook.svg";
import twitter from "../../../assets/icon-twitter.svg";
import pinterest from "../../../assets/icon-pinterest.svg";

// Fix white logo
// container mx-auto

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start bg-veryDarkBlue text-white p-10 md:pt-20 md:pb-32">
        <div className="flex-1">
          <h1 className="text-4xl font-medium">Shortly</h1>
        </div>
        <div className="flex-1 text-center md:text-left md:flex">
          <div className="md:pr-10">
            <h3 className="text-md">Features</h3>
            <ul className="py-2">
              <li>
                <a className="text-xs text-grayishViolet" href="#shortening">
                  Link Shortening
                </a>{" "}
              </li>
              <li>
                <a className="text-xs text-grayishViolet" href="#branded">
                  Branded Links
                </a>{" "}
              </li>
              <li>
                <a className="text-xs text-grayishViolet" href="#analytics">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div className="md:pr-10">
            <h3 className="text-md">Resources</h3>
            <ul className="py-2">
              <li>
                <a className="text-xs text-grayishViolet" href="#shortening">
                  Blog
                </a>{" "}
              </li>
              <li>
                <a className="text-xs text-grayishViolet" href="#branded">
                  Developers
                </a>{" "}
              </li>
              <li>
                <a className="text-xs text-grayishViolet" href="#analytics">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="md:pr-10">
            <h3 className="text-md">Company</h3>
            <ul className="py-2">
              <li>
                <a className="text-xs text-grayishViolet" href="#shortening">
                  About
                </a>{" "}
              </li>
              <li>
                <a className="text-xs text-grayishViolet" href="#branded">
                  Our Team
                </a>{" "}
              </li>
              <li>
                <a className="text-xs text-grayishViolet" href="#analytics">
                  Carrers
                </a>
              </li>
              <li>
                <a className="text-xs text-grayishViolet" href="#analytics">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:justify-end my-4 md:my-0 flex-1">
          <img className="px-2" src={facebook} alt="" />
          <img className="px-2" src={twitter} alt="" />
          <img className="px-2" src={pinterest} alt="" />
          <img className="px-2" src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
