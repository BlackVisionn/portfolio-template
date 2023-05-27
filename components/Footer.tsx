import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container white-text-container text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p>
              footerText{" "}
              <a href="footerUrl" target="_blank">
                footerUrlName
              </a>
            </p>
            <p>
              <a
                className="fa-icon fa-icon-2x"
                href="footerUrlVk"
                target="_blank"
              >
                <i className="fa fa-vk"></i>
              </a>
              <a
                className="fa-icon fa-icon-2x"
                href="footerUrlTelegram"
                target="_blank"
              >
                <i className="fa fa-telegram"></i>
              </a>
              <a
                className="fa-icon fa-icon-2x"
                href="footerUrlGit"
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
