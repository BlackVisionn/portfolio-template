import React from "react";

const Work = () => {
  return (
    <div className="card">
      <div className="card-block">
        <h2>Work</h2>
        <div className="work-experience">
          <small className="date">2017-2015</small>
          <h3 className="h5 date-title">
            Web developer -{" "}
            <a href="https://github.com" target="_blank">
              Company Name 1
            </a>
          </h3>

          <p>
            Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.
            Vitae ultricies leo integer malesuada nunc. Imperdiet proin
            fermentum leo vel orci porta non pulvinar neque. Fermentum leo vel
            orci porta non. Posuere sollicitudin aliquam ultrices sagittis.
            Aliquam faucibus purus in massa tempor nec.
          </p>
        </div>

        <div className="work-experience">
          <small className="date">2017-2015</small>
          <h3 className="h5 date-title">
            Web developer -{" "}
            <a href="https://github.com" target="_blank">
              Company Name 2
            </a>
          </h3>

          <p>
            Fermentum leo vel orci porta non. Posuere sollicitudin aliquam
            ultrices sagittis. Aliquam faucibus purus in massa tempor nec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;