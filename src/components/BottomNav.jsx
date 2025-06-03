import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaMedal, FaFileAlt, FaUser, FaEnvelope } from "react-icons/fa";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <Nav className="bottom-nav d-flex justify-content-around align-items-center">
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <FaHome size={20} />
          <div className="label">Home</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <FaMedal size={20} />
          <div className="label">Achievments</div>
        </Nav.Link>
      </Nav.Item>
       <Nav.Link href="#" className="text-center">
          <FaEnvelope size={20} />
          <div className="label">Contact</div>
        </Nav.Link>
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <FaFileAlt size={20} />
          <div className="label">Resume</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <FaUser size={20} />
          <div className="label">More</div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default BottomNav;
