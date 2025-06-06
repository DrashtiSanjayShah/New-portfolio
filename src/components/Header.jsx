import React from "react";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";
import { CiSearch, CiBellOn } from "react-icons/ci";
const Header = () => {
  return (
    <div className="header">
      {/* Left side */}
      <div>
        {/* <FaBars style={{ color: 'white', marginRight: '10px' }} /> */}
        <h2>Drashti Shah</h2>
      </div>

      {/* Right side */}
      <div className="right-icon"
        style={{
          
        }}
      >
        <CiBellOn className="icon" />
        <CiSearch className="icon" />
      </div>
    </div>
  );
};

export default Header;
