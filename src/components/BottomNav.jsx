import React from "react";
import { FaFileAlt, FaUser } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <a href="#" className="nav-link">
        <MdHome className='icon' />
        <div className="label">Home</div>
      </a>
      <a href="#" className="nav-link">
        <GiTrophy className='icon' />
        <div className="label">Achievements</div>
      </a>
      <a href="#" className="nav-link">
        <FaEnvelopeOpenText className='icon' />
        <div className="label">Contact</div>
      </a>
      <a href="#" className="nav-link">
        <FaFileAlt className='icon' />
        <div className="label">Resume</div>
      </a>
      <a href="#" className="nav-link">
        <FaUser className='icon' />
        <div className="label">More</div>
      </a>
    </div>
  );
};

export default BottomNav;
