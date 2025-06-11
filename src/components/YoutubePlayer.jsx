import React from "react";
import "./YoutubePlayer.css";
import Header from "./Header";
import video from "../assets/images/video.mp4";
import { Card, Container } from "react-bootstrap";
import channelPhoto from "../assets/images/drashti-photo.png"; // ✅ Add this line

const dummyData = [
  {
    creator: "That One Girl in B.Tech",
    username: "drashtishahahah",
  },
];

const YouTubePlayer = () => {
  const videoData = dummyData[0]; // ✅ Clean access

  return (
    <>
      <Header />
      <div className="full-video-page-container">
        <div className="full-video-wrapper">
          <video src={video} controls autoPlay muted />
        </div>

        <div className="full-video-details">
          <h2 className="full-video-title">
            Behind the Scenes: My Tech Journey 🚀
          </h2>

          <Card className="video-info-card">
            <Card.Body
              className="card-body"
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            >
              <img
                className="channel-photo"
                src={channelPhoto}
                alt="Channel"
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  marginTop: "0rem",
                  flexShrink: 0,
                }}
              />

              <div className="video-text-details">
                <Card.Text
                  className="video-details-text"
                  style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                >
                  {videoData.creator}
                </Card.Text>
                <Card.Text
                  className="video-details-text username"
                  style={{
                    fontSize: "1rem",
                    color: "grey",
                    marginTop: "-1rem",
                  }}
                >
                  {videoData.username}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>

          <p className="full-video-description">
            From web dev freelancing to Microsoft Learn Student Ambassador,
            here's a peek into how I built my portfolio, started my YouTube
            journey, and balanced it all with engineering!
          </p>
        </div>
      </div>
    </>
  );
};

export default YouTubePlayer;
