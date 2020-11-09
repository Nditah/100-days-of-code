import React, { useContext } from "react";
import PropTypes from "prop-types";
// import clockIcon from '../../Assets/clock.svg'
import "./jobsListingItem.css";
import JobsContext from "../../Context/jobsContext";

const JobsListingItem = ({
  loading,
  job: { index, id, apply, time, location, company, type, title, logo },
}) => {
  const jobsContext = useContext(JobsContext);

  const { jobsListing, detailPage } = jobsContext;

  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const today = new Date().toLocaleString("en-US", options);
  const createdAt = new Date(time).toLocaleString("en-US", options);

  const daysAgo = Math.floor(
    (new Date(today) - new Date(createdAt)) / (1000 * 3600 * 24)
  );

  const handleClick = (e) => {
    jobsContext.setDetailPage(true);
    jobsContext.setselectedIndex(index);
  };

    return (
      <div className="item" index={index}>
        <img
          onClick={(e) => handleClick(e)}
          className="logo"
          src={logo}
          alt="company logo"
        />
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
              <p>
                <i className="fa fa-globe" aria-hidden="true"></i> {location}
              </p>
              <p>
                {/* <img className="clockIcon" src={clockIcon} alt=""/> */}
                {daysAgo} days ago
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
};

export default JobsListingItem;

JobsListingItem.propTypes = {
  // apply: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  location: PropTypes.string,
  company: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  logo: PropTypes.string,
};
