import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import videoPlaceholder from "../assets/images/video-placeholder.png";
import channelPhoto from "../assets/images/drashti-photo.png";

const dummyData = [
  {
    creator: "That One Girl in B.Tech",
    title: "Making a FREE PORTFOLIO for my FOLLOWER",
    views: "131 Views",
    time: "4 months ago",
  },
  {
    creator: "That One Girl in B.Tech",
    title: "Teaching Web Design | I became a Teacher",
    views: "78 Views",
    time: "1 year ago",
  },
  {
    creator: "That One Girl in B.Tech",
    title: "HOW TO: PLACEMENT EP 1| RESOURCES TO PREPARE FOR YOUR CAMPUS PLACEMENT ",
    views: "393 Views",
    time: "5 months ago",
  },
  {
    creator: "That One Girl in B.Tech",
    title: "Watch this before your NEXT EXAM",
    views: "100 Views",
    time: "1 year ago",
  },
  {
    creator: "That One Girl in B.Tech",
    title: "if you are in your early 20s, you need to hear this",
    views: "421 Views",
    time: "8 months ago",
  },
  {
    creator: "That One Girl in B.Tech",
    title: "A Friday in life of a Corporate girlie💻| making Ganesha Idol🌸",
    views: "140 Views",
    time: "6 months ago",
  },
];

const Videos = () => {
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
              <Card className="h-100 border-0 bg-dark text-light">
                <Card.Img
                  variant="top"
                  src={videoPlaceholder} 
                  className="video-small-thumbnail img-fluid rounded"
                />
                <Card.Body>
                  <div style={{ display: "flex" }}>
                    <img className="channel-photo" src={channelPhoto} />
                    <Card.Title className="video-title">
                      {item.title}
                    </Card.Title>
                  </div>
                  <Card.Text className="video-details">
                    {item.creator} . {item.views} . {item.time}
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

export default Videos;
