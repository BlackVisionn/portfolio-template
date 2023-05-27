import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="card">
      <div className="card-block">
        <h2>aboutTitle</h2>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p>aboutFirstParagraph</p>
            <p>aboutSecondParagraph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
