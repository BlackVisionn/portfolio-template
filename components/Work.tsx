import React from "react";

const Work = () => {
  return (
    <div className="card">
      <div className="card-block">
        <h2>workTitle</h2>
        <div className="work-experience">
          <small className="date">firstWorkDates</small>
          <h3 className="h5 date-title">
            firstWorkPosition -{" "}
            <a href="firstWorkUrl" target="_blank">
              firstWorkCompanyName
            </a>
          </h3>

          <p>firstWorkDescription</p>
        </div>

        <div className="work-experience">
          <small className="date">secondWorkDates</small>
          <h3 className="h5 date-title">
            secondWorkPosition -{" "}
            <a href="secondWorkUrl" target="_blank">
              secondWorkCompanyName
            </a>
          </h3>

          <p>secondWorkDescription</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
