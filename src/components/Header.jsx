import React, { useState } from "react";
import { CiSearch, CiBellOn } from "react-icons/ci";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        {/* Left side */}
        <div className="header-left">
          <h2>Drashti Shah</h2>
        </div>

        {/* Right side */}
        <div className="right-icon">

          <CiBellOn className="icon" />
          <CiSearch className="icon" />
        </div>
      </div>

    </>
  );
};

export default Header;
