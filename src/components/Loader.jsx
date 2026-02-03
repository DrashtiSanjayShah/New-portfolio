import React, { useEffect } from "react";
import "../styles/loader.css";
import logo from "../assets/images/logo.png"

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof onFinish === "function") {
        onFinish(); // ✅ safe call
      } else {
        console.error("Loader error: onFinish is not a function");
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-screen">
      <div className="loader-center">
        <img
          src={logo}
          alt="Drashti Logo"
          className="loader-logo"
          onError={(e) => (e.target.style.display = "none")} // prevents crash
        />

        <div className="loader-bar-wrapper">
          <span className="play-icon">▶</span>
          <div className="loader-bar">
            <div className="loader-progress" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
