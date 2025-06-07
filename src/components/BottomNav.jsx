import React from "react";
import { FaFileAlt, FaUser, FaEnvelopeOpenText } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { Link } from "react-router-dom"; // <- import Link
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-link">
        <MdHome className='icon' />
        <div className="label">Home</div>
      </Link>
      <Link to="/achievements" className="nav-link">
        <GiTrophy className='icon' />
        <div className="label">Achievements</div>
      </Link>
      <Link to="/contact" className="nav-link">
        <FaEnvelopeOpenText className='icon' />
        <div className="label">Contact</div>
      </Link>
      <Link to="/resume" className="nav-link">
        <FaFileAlt className='icon' />
        <div className="label">Resume</div>
      </Link>
      <Link to="/more" className="nav-link">
        <FaUser className='icon' />
        <div className="label">More</div>
      </Link>
    </div>
  );
};

export default BottomNav;
