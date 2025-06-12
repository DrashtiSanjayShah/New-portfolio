import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import heetWebsite from "../assets/images/heetwebsite.png";
import friday from "../assets/images/friday.png";
import youneedtohearthis from "../assets/images/youneedtohearthis.png";
import placement from "../assets/images/placement.png";
// import heetWebsite from "../assets/images/heetwebsite.png";
import channelPhoto from "../assets/images/drashti-photo.png";

const dummyData = [
  {
    id: "5oUG8TwOv9c",
    thumbnail: heetWebsite,
    creator: "That One Girl in B.Tech",
    title: "Making a FREE PORTFOLIO for my FOLLOWER",
    views: "131 Views",
    time: "4 months ago",
  },
   {
    id: "rDGo6utuRis",
    thumbnail: friday,
    creator: "That One Girl in B.Tech",
    title: "A Friday in life of a Corporate girlie💻 | making Ganesha Idol🌸",
    views: "140 Views",
    time: "6 months ago",
  },
  {
    id: "xayj150NLrU",
    thumbnail: "https://img.youtube.com/vi/xayj150NLrU/hqdefault.jpg",
    creator: "That One Girl in B.Tech",
    title: "Teaching Web Design | I became a Teacher",
    views: "78 Views",
    time: "1 year ago",
  },

  {
    id: "Vn6kGqEWukw",
    thumbnail: "https://img.youtube.com/vi/Vn6kGqEWukw/hqdefault.jpg",
    creator: "That One Girl in B.Tech",
    title: "Watch this before your NEXT EXAM",
    views: "100 Views",
    time: "1 year ago",
  },
    
  {
    id: "B_O4vE5Uff4",
    thumbnail: youneedtohearthis,
    creator: "That One Girl in B.Tech",
    title: "if you are in your early 20s, you need to hear this",
    views: "421 Views",
    time: "8 months ago",
  },
  {
    id: "W0EZDgKWEwQ",
    thumbnail: placement,
    creator: "That One Girl in B.Tech",
    title:
      "HOW TO: PLACEMENT EP 1 | RESOURCES TO PREPARE FOR YOUR CAMPUS PLACEMENT",
    views: "393 Views",
    time: "5 months ago",
  },
 
];

const Videos = () => {
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
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${item.id}`,
                    "_blank"
                  )
                }
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
