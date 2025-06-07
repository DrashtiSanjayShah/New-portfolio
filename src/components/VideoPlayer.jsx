import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Resume from '../assets/Resume.pdf'; 
import videoPlaceholder from "../assets/images/video-placeholder.png";

const VideoPlayer = () => {
  return (
    <div className="videoPlayer-container">
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
<div className="social-icons">
   <a
    href="https://www.instagram.com/thatonegirlinb.tech/"
    target="_blank"
    rel="noopener noreferrer"
  >
  <FaInstagram className="icon" />
  </a>
   <a
    href="https://www.youtube.com/@thatonegirlinbtech"
    target="_blank"
    rel="noopener noreferrer"
  >
        <FaYoutube className="icon" />
        </a>
</div>
        
      </div>
      <div className="button mobile-buttons">
       <a
  href={Resume}
  download
  className="video-button"
>
  DOWNLOAD RESUME
</a>
        <Button variant="outline-dark" className='video-button' >RESOURCES</Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
