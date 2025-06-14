import React, { useEffect } from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";
import Header from './Header';
import BottomNav from './BottomNav';
import FreelanceProjects from './FreelanceProjects';
// import videoPlaceholder from "../assets/images/video.mp4";
// import './video.css';

const Freelance = () => {
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
    <>
    <Header />
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
        Freelance Introduction Video </a>
        <p>this is a video about how I  handle freelance clients and projects.</p>
        
      </div>

      <div className="button mobile-buttons">
        <a href='/contact' className="video-button">
          Book a Call
        </a>
        
         
      </div>
    </div>
    <FreelanceProjects />
    <BottomNav />
    </>
  );
};

export default Freelance;
