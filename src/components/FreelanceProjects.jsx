import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import heetWebsite from "../assets/images/heetwebsite.png";
import friday from "../assets/images/friday.png";
import youneedtohearthis from "../assets/images/youneedtohearthis.png";
import Teaching from "../assets/images/Teaching.jpeg";
import Exam from "../assets/images/Exam.jpeg";
import channelPhoto from "../assets/images/drashti-photo.png";

const dummyData = [
  {
    thumbnail: heetWebsite,
    title: "Heet's Portfolio",
    description: "Making a FREE PORTFOLIO for my FOLLOWER",
   
  },
   {
   
    thumbnail: friday,
    title: "Money Montage",
    description: "A Friday in life of a Corporate girlie💻 | making Ganesha Idol🌸",
   
  },
  {
   
    thumbnail: Teaching,
    title: "Linkedin For the Girlies",
    description: "Teaching Web Design | I became a Teacher",
    
  },

  {
  
    thumbnail: Exam,
    title: "SageBhrigu",
    description: "Watch this before your NEXT EXAM",
    
  },
    
  {

    thumbnail: youneedtohearthis,
    title: "Richon Agro",
    description: "if you are in your early 20s, you need to hear this",
    
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
              <Card
                className="card"
                
              >
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  className="video-small-thumbnail"
                />
                <Card.Body>
                  <div className="card-body" style={{ display: "flex" }}>

                    <img className="channel-photo" src={channelPhoto} />
                    <Card.Title className="video-title">
                      {item.title}
                    </Card.Title>
                  </div>
                  <Card.Text className="video-details">
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
