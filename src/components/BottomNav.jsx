import React from "react";
import { FaFileAlt, FaUser, FaEnvelopeOpenText } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import Resume from "../assets/Resume.pdf";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-link">
        <MdHome className="icon" />
        <div className="label">Home</div>
      </Link>
      <Link to="/achievements" className="nav-link">
        <GiTrophy className="icon" />
        <div className="label">Achievements</div>
      </Link>
      <Link to="/contact" className="nav-link">
        <FaEnvelopeOpenText className="icon" />
        <div className="label">Contact</div>
      </Link>
      <a
        href={Resume}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFileAlt className="icon" />
        <div className="label">Resume</div>
      </a>
      <Link to="/profile" className="nav-link">
        <FaUser className="icon" />
        <div className="label">Drashti</div>
      </Link>
    </div>
  );
};

export default BottomNav;
