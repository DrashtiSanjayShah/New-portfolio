import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { Button } from "react-bootstrap";
import videoPlaceholder from '../assets/images/video-placeholder.png';

const VideoPlayer = () => {
  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        padding: "1rem",
        display: "flex",
        borderBottom: "1px solid #3a3a3a" // grey line at the bottom
      }}
    >
      {/* Left side */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={videoPlaceholder}
          className="small-thumbnail rounded border bg-light padding: '0.5rem 1rem'"
        />
      </div>

      {/* Right side */}
      <div style={{ paddingLeft: '2rem', gap: '30px' }}>
        <h5>Introduction Video</h5>
        <p> this is a video about 'me' - Drashti</p>

        <FaInstagram style={{ color: "white", fontSize: "20px" }} />
        <FaYoutube style={{ color: "white", fontSize: "20px" }} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginLeft: '-15rem',
          paddingTop: '4rem',
          
        }}
      >
        <Button variant="outline-dark">DOWNLOAD RESUME</Button>
        <Button variant="outline-dark">RESOURCES</Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
