import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <h3 className="h5">
              <a href="https://translate.google.ru/" target="_blank">
                YOUR PROJECT NAME 1
              </a>
            </h3>
            <p>June 2017</p>
          </div>
          <div className="col-md-4">
          <h3 className="h5">
              <a href="https://translate.google.ru/" target="_blank">
                YOUR PROJECT NAME 2
              </a>
            </h3>
            <p>March 2017</p>
          </div>
          <div className="col-md-4">
          <h3 className="h5">
              <a href="https://translate.google.ru/" target="_blank">
                YOUR PROJECT NAME 3
              </a>
            </h3>
            <p>Jan 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
