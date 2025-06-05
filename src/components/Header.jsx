import React from 'react';
import { FaBars, FaBell, FaSearch } from 'react-icons/fa';
import { CiSearch, CiBellOn } from "react-icons/ci";
const Header = () => {
  return (
    <div style={{
      backgroundColor: '#0f0f0f',
      padding: '0.5rem 1rem'
    }}>
      <div style={{
        display: 'flex',
        height: '40px',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0'
      }}>

        {/* Left side */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <FaBars style={{ color: 'white', marginRight: '10px' }} /> */}
          <span style={{ color: 'white', fontSize: '1.25rem' }}>
            Drashti Shah
          </span>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginRight: '0' }}>
          <CiBellOn style={{ color: 'white', fontSize: '24px',  }} />
          <CiSearch style={{ color: 'white', fontSize: '24px' }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
