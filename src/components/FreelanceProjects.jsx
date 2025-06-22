import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import HeetWebsite from "../assets/images/Heet-website.png";
import LinkedinClone from "../assets/images/linkedin.png";
import MoneyMontage from "../assets/images/MoneyMontage.png";
import Sagebhrigu from "../assets/images/sagebhrigu.png";

// Links to the work
//Heet website (netlify): https://famous-bublanina-d637d4.netlify.app
//sageBhrigu (netlify): https://starlit-manatee-7c9f3f.netlify.app
//money montage - github (needs minor changes)

const dummyData = [
  {
    thumbnail: HeetWebsite,
    title: "Heet's Portfolio",
    description: "I created Heet's Portfolio website keeping in mind his qualifications and personality. With a clean UI and minimal animations, Heet's portfolio is a reflection of his work ethics and experience.",
    link: "https://famous-bublanina-d637d4.netlify.app",
  },
  {
    thumbnail: MoneyMontage,
    title: "Money Montage",
    description:
      "Money Montage as a company focuses on serving their customers with the right SPI and stocks. This website was not to attract clients but, to have a digital presence. Using colours like green, my motto was to invoke the sense of trust which is what you want from a financial adviser. ",
    link: "https://drashtisanjayshah.github.io/Money-Montage/",
  },
  {
    thumbnail: LinkedinClone,
    title: "Linkedin For the Girlies",
    description: "This is a old project but, I am super proud of it. Integrated with Firebase as the backend, this project taugh me a lot. The backend configuration took the life out of me but, now that I see it working just like how I imagined, everything was worthit! ",
    link: "https://linkedin-ccee8.web.app",
  },

  {
    thumbnail: Sagebhrigu,
    title: "SageBhrigu",
    description: "Watch this before your NEXT EXAM",
    link: "https://starlit-manatee-7c9f3f.netlify.app",
  },
];

const FreelaneProjects = () => {
  const rows = [];
  for (let i = 0; i < dummyData.length; i += 2) {
    rows.push(dummyData.slice(i, i + 2));
  }

  return (
    <Container className="videos">
      {rows.map((rowItems, rowIndex) => (
        <Row key={rowIndex} className="mb-4">
          {rowItems.map((item, colIndex) => (
            <Col key={colIndex} md={4}>
              <Card className="card">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    className="video-small-thumbnail" loading="lazy"
                  />
                </a>
                <Card.Body>
                  <div className="card-body">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Card.Title className="video-title">
                        {item.title}
                      </Card.Title>
                    </a>
                  </div>
                  <Card.Text
                    className="video-details"
                    style={{ marginLeft: "1rem" }}
                  >
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default FreelaneProjects;