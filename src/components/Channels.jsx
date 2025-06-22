import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Computerphile from "../assets/images/Computerphile.jpg";
import HarikatSingh from "../assets/images/HarkiratSingh.jpg";
import RishabMishra from "../assets/images/RishabMishra.jpg";
import Freecodecamp from "../assets/images/freecodecamp.png";
import Shreya from "../assets/images/Shreya.jpeg";
import Tim from "../assets/images/techwithtim.jpg";
import Header from "./Header";
import BottomNav from "./BottomNav";

const dummyData = [
  {
    thumbnail: Freecodecamp,
    text: "Majority of the things I’ve learned have been via this channel. The content is to the point without any fluff. While the videos are long (and can get boring), they are well-structured and packed with information we might have otherwise overlooked. Their 'Python for Dummies' and the video about the structure of SQL were pure gold!",
    title: "FreeCodeCamp",
  },
  {
    thumbnail: Tim,
    text: "I believe everyone has stumbled upon his channel at least once in their programming journey. In-depth videos with a few of his punchlines here and there make the learning easier. Watch his playlist on 'System Design.'",
    title: "Tech with Tim",
  },
  {
    thumbnail: Shreya,
    text: "She’s a fun creator making content about makeup and beauty. This is my way of unwinding after a stressful day!",
    title: "Shreya Jain",
  },
  {
    thumbnail: Computerphile,
    text: "This channel, in my opinion, is pure gold and super underrated. One of those channels on YouTube that are doing God’s work by sharing crisp, no-time-waste information. Admittedly, I do have to go through their videos 2–3 times before I finally understand everything completely, but I’m so glad I found them!",
    title: "Computerphile",
  },
  {
    thumbnail: HarikatSingh,
    text: "I discovered this channel quite late — and I regret it deeply. The project ideas he shares here are great and *ACTUALLY* help build your development skills.",
    title: "Harikat Singh",
  },
  {
    thumbnail: RishabMishra,
    text: "Want to learn SQL? He’s the dude! Two days before my placements, I binge-watched all of his videos. Example-heavy stuff explained clearly — so you’ll finally remember the difference between a DELETE and a TRUNCATE!",
    title: "Rishab Mishra",
  },
];


const Videos = () => {
  const rows = [];
  for (let i = 0; i < dummyData.length; i += 2) {
    rows.push(dummyData.slice(i, i + 2));
  }

  return (
    <>
      <Header />
      <Container className="channel-container">
        <h1 className="hero-section">My Favourite YouTube Channels</h1>
        {rows.map((rowItems, rowIndex) => (
          <Row key={rowIndex} className="mb-4">
            {rowItems.map((item, colIndex) => (
              <Col key={colIndex} md={4}>
                <Card className="card">
                  <Card.Body>
                    <div className="channel-card-body">
                      <img className="channel-photo-fav" src={item.thumbnail} />
                      <Card.Title className="channel-name">
                        {item.title}

                        <Card.Text className="yt-details">
                          {item.text}
                        </Card.Text>
                      </Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <BottomNav />
    </>
  );
};

export default Videos;
