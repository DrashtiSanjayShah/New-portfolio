import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import HeetWebsite from "../assets/images/Heet-website.png";
import LinkedinClone from "../assets/images/linkedin.png";
import MoneyMontage from "../assets/images/MoneyMontage.png";
import youneedtohearthis from "../assets/images/youneedtohearthis.png";
import Teaching from "../assets/images/Teaching.jpeg";
import Exam from "../assets/images/Exam.jpeg";

// Links to the work
//Heet website (netlify): https://famous-bublanina-d637d4.netlify.app
//sageBhrigu (netlify): https://starlit-manatee-7c9f3f.netlify.app
//money montage - github (needs minor changes)

const dummyData = [
  {
    thumbnail: HeetWebsite,
    title: "Heet's Portfolio",
    description: "Making a FREE PORTFOLIO for my FOLLOWER",
    link: "https://famous-bublanina-d637d4.netlify.app",
  },
  {
    thumbnail: MoneyMontage,
    title: "Money Montage",
    description:
      "A Friday in life of a Corporate girlie💻 | making Ganesha Idol🌸",
    link: "https://drashtisanjayshah.github.io/Money-Montage/",
  },
  {
    thumbnail: LinkedinClone,
    title: "Linkedin For the Girlies",
    description: "Teaching Web Design | I became a Teacher",
    link: "https://linkedin-ccee8.web.app",
  },

  {
    thumbnail: Exam,
    title: "SageBhrigu",
    description: "Watch this before your NEXT EXAM",
    link: "https://starlit-manatee-7c9f3f.netlify.app",
  },
];

const FreelaneProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
                    className="video-small-thumbnail"
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
