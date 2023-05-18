import React from "react";

const Header = () => {
  return (
    <header className="white-text-container section-container">
      <div className="text-center">
        <h1>I am "YOUR NAME"</h1>
        <p>Web designer</p>
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
    </header>
  );
};

export default Header;
