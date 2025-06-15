import React, { useEffect } from "react";
import Header from './Header';
import BottomNav from './BottomNav';
import FreelanceProjects from './FreelanceProjects';


const Freelance = () => {

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
        Introduction Video </a>
        <p>this is a video about 'me' – Drashti</p>
        
      </div>

      <div className="button mobile-buttons">
        <a href='/contact' className="video-button">
          BOOK A CALL
        </a>
      
      </div>
    </div>
    <FreelanceProjects />
    <BottomNav />
    </>
  );
};

export default Freelance;
