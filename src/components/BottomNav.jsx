import React from "react";
import { Nav } from "react-bootstrap";
import { FaFileAlt, FaUser } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <Nav className="bottom-nav d-flex justify-content-around align-items-center">
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <MdHome size={24} />
          <div className="label">Home</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <GiTrophy size={24} />
          <div className="label">Achievments</div>
        </Nav.Link>
      </Nav.Item>
       <Nav.Link href="#" className="text-center">
          <FaEnvelopeOpenText size={24} />
          <div className="label">Contact</div>
        </Nav.Link>
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <FaFileAlt size={24} />
          <div className="label">Resume</div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" className="text-center">
          <FaUser size={24} />
          <div className="label">More</div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default BottomNav;
