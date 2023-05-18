import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container white-text-container text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p>
              ©All right reserved. Design{" "}
              <a href="https://github.com" target="_blank">
                Mashup Template
              </a>
            </p>
            <p>
              <a
                className="fa-icon fa-icon-2x"
                href="https://vk.com"
                target="_blank"
              >
                <i className="fa fa-vk"></i>
              </a>
              <a
                className="fa-icon fa-icon-2x"
                href="https://web.telegram.org/"
                target="_blank"
              >
                <i className="fa fa-telegram"></i>
              </a>
              <a
                className="fa-icon fa-icon-2x"
                href="https://github.com"
                target="_blank"
              >
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
