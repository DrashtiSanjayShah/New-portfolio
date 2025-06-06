import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { Button } from "react-bootstrap";
import videoPlaceholder from '../assets/images/video-placeholder.png';

const VideoPlayer = () => {
  return (
    <div className="videoPlayer-container"
    >
      {/* Left side */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={videoPlaceholder}
          className="small-thumbnail rounded border bg-light padding: '0.5rem 1rem'"
        />
      </div>

      {/* Right side */}
      <div className="right-side-video">
        <h5>Introduction Video</h5>
        <p> this is a video about 'me' - Drashti</p>

        <FaInstagram className='icon' />
        <FaYoutube className='icon' />
      </div>
      <div className="mobile-buttons"
      >
        <Button variant="outline-dark">DOWNLOAD RESUME</Button>
        <Button variant="outline-dark">RESOURCES</Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
