import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import HeetWebsite from "../assets/images/HeetWebsiteimg.png";
import crossfit from "../assets/images/CrossFit.png";
import BabyShower from "../assets/images/BabyShower.png";
import MoneyMontage from "../assets/images/MoneyMontage.png";
import PerfectGym from "../assets/images/PerfectGym.png";
import RichonAgro from "../assets/images/RichonAgro.png";
import channelPhoto from "../assets/images/drashti-photo.png";
import VideoPlayer from "./VideoPlayer";
import youtubeIntro from "../assets/videos/intro.mp4"
const dummyData = [
  {
    thumbnail: HeetWebsite,
    title: "Personal Portfolio Website (Design + Development)",
    link: "https://famous-bublanina-d637d4.netlify.app",
  },
  {
    thumbnail: crossfit,
    title: "CrossFit Gym Website (High-Conversion Landing Page)",
    link: "https://crossfit4-bhandup.netlify.app",
  },
  {
    thumbnail: PerfectGym,
    title: "Modern Gym Website for Local Fitness Center",
    link: "https://rad-mermaid-65d379.netlify.app",
  },

  {
    thumbnail: RichonAgro,
    title: "Corporate Website for Agro-Based Business",
    link: "https://dashing-clafoutis-0d996b.netlify.app",
  },

  {
    thumbnail: BabyShower,
    title: "Themed Event Website – 1900s Baby Shower",
    link: "https://drashtisanjayshah.github.io/BabyShower/",
  },
  {
    thumbnail: MoneyMontage,
    title: "Corporate Finance Website (Trust-Focused Design)",
    link: "https://voluble-croissant-08a7fd.netlify.app",
  },
];

const Videos = () => {
  const rows = [];
  for (let i = 0; i < dummyData.length; i += 2) {
    rows.push(dummyData.slice(i, i + 2));
  }

  return (
    <>
    <VideoPlayer
      videoSrc={youtubeIntro}
        title="Hi, I’m Drashti 👋"
        description="I build clean, conversion-focused websites for individuals and businesses."
        buttons={[
          { label: "DOWNLOAD RESUME", link: "" },
          { label: "RESOURCES", link: "/contact" },
        ]}
      />
    <Container className="videos">
      {rows.map((rowItems, rowIndex) => (
        <Row key={rowIndex} className="mb-4">
          {rowItems.map((item, colIndex) => (
            <Col key={colIndex} md={4}>
              <Card
                className="card"
                onClick={() => window.open(item.link, "_blank")}
              >
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  loading="lazy"
                  className="video-small-thumbnail"
                />
                <Card.Body>
                  <div className="card-body" style={{ display: "flex" }}>
                    <img className="channel-photo" src={channelPhoto} />
                    <Card.Title className="website-title">
                      {item.title}
                      <Card.Text className="video-details"></Card.Text>
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
    </>
  );
};

export default Videos;
