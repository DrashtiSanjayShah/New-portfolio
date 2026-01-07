import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { GoHome, GoHomeFill } from "react-icons/go";
import { PiMedalLight, PiMedalFill } from "react-icons/pi";
import { MdOutlinePhone, MdPhone } from "react-icons/md";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";

import Resume from "../assets/Resume.pdf";

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bottom-nav">
      {/* Home */}
      <NavLink to="/" className="nav-link">
        {path === "/" ? (
          <GoHomeFill className="icon" />
        ) : (
          <GoHome className="icon" />
        )}
        <div className="label">Home</div>
      </NavLink>

      {/* Achievements */}
      <NavLink to="/achievements" className="nav-link">
        {path === "/achievements" ? (
          <PiMedalFill className="icon" />
        ) : (
          <PiMedalLight className="icon" />
        )}
        <div className="label">Achievements</div>
      </NavLink>

      {/* Contact */}
      <NavLink to="/contact" className="nav-link">
        {path === "/contact" ? (
          <MdPhone className="icon" />
        ) : (
          <MdOutlinePhone className="icon" />
        )}
        <div className="label">Contact</div>
      </NavLink>

      {/* Resume */}
      <a
        href={Resume}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaRegFile className="icon" />
        <div className="label">Resume</div>
      </a>

      {/* Profile */}
      <NavLink to="/profile" className="nav-link">
        {path === "/profile" ? (
          <IoPerson className="icon" />
        ) : (
          <IoPersonOutline className="icon" />
        )}
        <div className="label">Drashti</div>
      </NavLink>
    </div>
  );
};

export default BottomNav;
