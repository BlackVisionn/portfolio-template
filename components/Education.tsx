import React from "react";

const Education = () => {
  return (
    <div className="card">
      <div className="card-block">
        <h2>educationTitle</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="education-experience">
              <small className="date">firstEducationDates</small>
              <h3 className="h5 date-title">firstEducationTitle</h3>
              <p>firstEducationStudyPlace</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="education-experience">
              <small className="date">secondEducationDates</small>
              <h3 className="h5 date-title">secondEducationTitle</h3>
              <p>secondEducationStudyPlace</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="education-experience">
              <small className="date">thirdEducationDates</small>
              <h3 className="h5 date-title">thirdEducationTitle</h3>
              <p>thirdEducationStudyPlace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
