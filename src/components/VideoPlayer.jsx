import React, { useEffect } from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const VideoPlayer = ({
  videoSrc,
  title,
  description,
  showSocials = true,
  buttons = [],
}) => {
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setTimeout(() => {
          const container = document.querySelector(".videoPlayer-container");
          if (container) {
            container.style.display = "none";
            // force reflow
            void container.offsetHeight;
            container.style.display = "flex";
          }
        }, 100);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div className="videoPlayer-container">
      {/* Left side - Video */}
      <div className="video-left">
        <video
          src={videoSrc}
          controls
          autoPlay
          muted
          className="small-thumbnail rounded border bg-light"
        />
      </div>

      {/* Right side - Content */}
      <div className="right-side-video">
        <h3>{title}</h3>
        <p>{description}</p>

        {showSocials && (
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
        )}
      </div>

      {/* Buttons */}
      {buttons.length > 0 && (
        <div className="button mobile-buttons">
          {buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.link}
              className="video-button"
              target={btn.external ? "_blank" : undefined}
              rel={btn.external ? "noopener noreferrer" : undefined}
              download={btn.download ? "" : undefined}
            >
              {btn.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
