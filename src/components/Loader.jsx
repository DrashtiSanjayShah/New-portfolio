import React from "react";
import "../styles/loader.css";
import logo from "../assets/images/logo.png"; // your logo

const Loader = () => {
  return (
    <div className="yt-loader">
      <img src={logo} alt="Drashti Logo" className="yt-loader-logo" />

      <div className="yt-loader-bar-wrapper">
        <span className="yt-loader-play">▶</span>
        <div className="yt-loader-bar">
          <div className="yt-loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
