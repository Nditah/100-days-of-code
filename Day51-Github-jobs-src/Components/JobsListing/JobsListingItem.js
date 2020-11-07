import React from "react";
// import "./jobsListingItem.css";

const JobsListingItem = ({ type, title, company_logo }) => {
  return (
    <div className="item">
      <img className="logo" src={company_logo} alt="logo" />
      <div className="jobListingContainer">
        <header>
          <p>Kasisto</p>
        </header>
        <main>
          <h2>{title}</h2>
        </main>
        <footer>
          <button className="info">Full time</button>
          <div className="details">
            <p>New York</p>
            <p>5 days ago</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default JobsListingItem;
