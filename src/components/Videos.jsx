import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import videoPlaceholder from "../assets/images/video-placeholder.png";

const dummyData = [
  { creator: "That One Girl in B.Tech", title: "TIPS FOR YOUR 20...", views: "1 View", time: "2 days ago" },
  { creator: "That One Girl in B.Tech", title: "AI’s “Moore’s Law??”", views: "120 Views", time: "5 hours ago" },
  { creator: "That One Girl in B.Tech", title: "Why We Need Sleep", views: "88 Views", time: "1 week ago" },
  { creator: "That One Girl in B.Tech", title: "How I Learn Fast", views: "300 Views", time: "3 days ago" },
  { creator: "That One Girl in B.Tech", title: "React Basics 101", views: "40 Views", time: "1 day ago" },
  { creator: "That One Girl in B.Tech", title: "College Life Vlog", views: "550 Views", time: "2 weeks ago" },
];

const Videos = () => {
  const rows = [];
  for (let i = 0; i < dummyData.length; i += 2) {
    rows.push(dummyData.slice(i, i + 2));
  }

  return (
    <Container
      className="py-4"
      style={{ display: "flex", gap: "1rem", margin: "1rem" }}
    >
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
                <Card.Body >
                  <Card.Title style={{ fontSize: "1rem", marginTop:'1rem' }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "0.75rem", color: "#ccc", marginTop: '0.5rem', marginBottom: '3rem' }}>
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
