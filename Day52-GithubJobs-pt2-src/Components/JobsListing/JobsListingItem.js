import React from "react";
import "./jobsListingItem.css";

const JobsListingItem = ({
  job: { created_at, location, company, type, title, company_logo },
}) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const today = new Date().toLocaleString("en-US", options);
  const createdAt = new Date(created_at).toLocaleString("en-US", options);

  const daysAgo =
    Math.floor((new Date(today) - new Date(createdAt)) / (1000 * 3600 * 24));

  return (
    <div className="item">
      <img className="logo" src={company_logo} alt="company logo" />
      <div className="jobListingContainer">
        <header>
          <p>{company}</p>
        </header>
        <main>
          <h2>{title}</h2>
        </main>
        <footer>
          <button className="info">{type}</button>
          <div className="details">
            <p><i className="fa fa-globe" aria-hidden="true"></i> {location}</p>
            <p>
            {/* <i class="far fa-clock"></i> */}
               {daysAgo} days ago</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default JobsListingItem;
