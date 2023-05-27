import React from "react";

const Header = () => {
  return (
    <header className="white-text-container section-container">
      <div className="text-center">
        <h1>headerTitle</h1>
        <p>headerDescription</p>
        <p>
          <a className="fa-icon fa-icon-2x" href="headerUrlVk" target="_blank">
            <i className="fa fa-vk"></i>
          </a>
          <a
            className="fa-icon fa-icon-2x"
            href="headerUrlTelegram"
            target="_blank"
          >
            <i className="fa fa-telegram"></i>
          </a>
          <a className="fa-icon fa-icon-2x" href="headerUrlGit" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
