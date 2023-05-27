import React from "react";

const Languages = () => {
  return (
    <div className="card">
      <div className="card-block">
        <h2>languagesTitle</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="language-experience">
              <h3 className="h5">
                firstLanguageName <small>firstLanguageLevel</small>
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="language-experience">
              <h3 className="h5">
                secondLanguageName <small>secondLanguageLevel</small>
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="language-experience">
              <h3 className="h5">
                thirdLanguageName <small>thirdLanguageLevel</small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
