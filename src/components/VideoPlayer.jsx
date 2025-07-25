import React, { useEffect } from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";
// import videoPlaceholder from "../assets/images/video.mp4";
// import './video.css';

const VideoPlayer = () => {
useEffect(() => {
  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      // Delay just enough to allow the browser to exit fullscreen
      setTimeout(() => {
        const container = document.querySelector(".videoPlayer-container");
        if (container) {
          // Force reflow
          container.style.display = "none";
          void container.offsetHeight; // Trigger reflow
          container.style.display = "flex";
        }
      }, 100);
    }
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);
  return () => {
    document.removeEventListener("fullscreenchange", handleFullscreenChange);
  };
}, []);


  return (
    <div className="videoPlayer-container">
      {/* Left side */}
      <div style={{ display: "flex", alignItems: "center" }}>
        
        <video
          // src={videoPlaceholder}
          controls
          autoPlay
          muted
          className="small-thumbnail rounded border bg-light"
        />
        
      </div>

      {/* Right side */}
      <div className="right-side-video">
        <a href='/fullvideo'
       style={{ color: "white", textDecoration: 'none', fontWeight: 'bold'}} >
        Introduction Video </a>
        <p>this is a video about 'me' – Drashti</p>
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
        <a href={Resume} download className="video-button">
          DOWNLOAD RESUME
        </a>
        <a
          href="https://drive.google.com/file/d/1KY67ETEZ1-jeAA7KhY6bwu6KXPLyfvAL/view?usp=share_link"
          className="video-button"
          target="_blank"
        >
          RESOURCES
        </a>
      </div>
    </div>
  );
};

export default VideoPlayer;
