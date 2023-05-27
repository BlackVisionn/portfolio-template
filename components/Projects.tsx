import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="card">
      <div className="card-block">
        <h2>projectsTitle</h2>
        <div className="row">
          <div className="col-md-4">
            <h3 className="h5">
              <a href="firstProjectUrl" target="_blank">
                firstProjectTitle
              </a>
            </h3>
            <p>firstProjectDate</p>
          </div>
          <div className="col-md-4">
            <h3 className="h5">
              <a href="secondProjectUrl" target="_blank">
                secondProjectTitle
              </a>
            </h3>
            <p>secondProjectDate</p>
          </div>
          <div className="col-md-4">
            <h3 className="h5">
              <a href="thirdProjectUrl" target="_blank">
                thirdProjectTitle
              </a>
            </h3>
            <p>thirdProjectDate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
