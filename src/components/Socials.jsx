import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const dummyData = [
  { title: 'TIPS FOR YOUR 20...', views: '1 Views', time: 'time ago' },
  { title: 'AI’s “Moore’s Law??”', views: '1 Views', time: 'time ago' },
];

const Socials = () => (
  <Row xs={2} className="g-3">
    {dummyData.map((item, idx) => (
      <Col key={idx}>
        <Card className="text-center h-100">
          <Card.Body>
            <div className="rounded-circle bg-secondary mx-auto mb-2" style={{ width: 50, height: 50 }}></div>
            <Card.Title style={{ fontSize: '1rem' }}>{item.title}</Card.Title>
            <Card.Text style={{ fontSize: '0.8rem' }}>{item.views} • {item.time}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default Socials;
