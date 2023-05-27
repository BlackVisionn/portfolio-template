import React from "react";

const Contact = () => {
  return (
    <div className="card">
      <div className="card-block">
        <h2>contactTitle</h2>
        <form action="" className="reveal-content">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="firstInputPlaceholderName"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="secondInputPlaceholderName"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="textareaPlaceholderName"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className=" btn btn-primary">
              buttonName
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
