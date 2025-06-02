import React from "react";
import { Nav } from "react-bootstrap";
import { FaHome, FaBook, FaFileAlt, FaEllipsisH } from "react-icons/fa";
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
          <FaBook size={20} />
          <div className="label">Resources</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <FaFileAlt size={20} />
          <div className="label">Resume</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <FaEllipsisH size={20} />
          <div className="label">More</div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default BottomNav;
