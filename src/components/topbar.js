import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">My Blog</div>
      <div className="links">
        <a href="https://www.linkedin.com/in/shashank-bachu/">Home</a>
        <a href="https://www.linkedin.com/in/shashank-bachu/">About</a>
        <a href="https://www.linkedin.com/in/shashank-bachu/">Contact</a>
      </div>
    </div>
  );
};

export default TopBar;
