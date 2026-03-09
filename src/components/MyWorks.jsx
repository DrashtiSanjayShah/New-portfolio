import { React, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import HeetWebsite from "../assets/images/HeetWebsiteimg.png";
import crossfit from "../assets/images/CrossFit.png";
import BabyShower from "../assets/images/BabyShower.png";
import MoneyMontage from "../assets/images/MoneyMontage.png";
import PerfectGym from "../assets/images/PerfectGym.png";
import RichonAgro from "../assets/images/RichonAgro.png";
import channelPhoto from "../assets/images/heet.jpg";
import VideoPlayer from "./VideoPlayer";
import youtubeIntro from "../assets/videos/intro.mp4";
import { TiPin } from "react-icons/ti";
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

const MyWork = () => {
  const rows = [];
  for (let i = 0; i < dummyData.length; i += 2) {
    rows.push(dummyData.slice(i, i + 2));
  }

  useEffect(() => {
    document.body.classList.add("page-videos");

    return () => {
      document.body.classList.remove("page-videos");
    };
  }, []);

  return (
    <>
      <VideoPlayer
        videoSrc={youtubeIntro}
        title="Hi, I’m Drashti 👋"
        description="this is how i work."
        buttons={[
          { label: "MY WORK", scrollTo: "my-projects" },
          { label: "BOOK A CALL", link: "/contact" },
        ]}
        style={{ marginLeft: "-10rem" }}
      />
      <section className="yt-testimonial">
        <a href="https://www.linkedin.com/in/drashtisanjayshah/">
          <div className="yt-testimonial__wrapper">
            <span className="yt-testimonial__pin">
              <TiPin /> Pinned Comment
            </span>

            <p className="yt-testimonial__text">
              I highly recommend Drashti for her incredible talent and
              dedication in web development. She went above and beyond by
              creating my portfolio website for free. The final design was
              clean, intuitive, and visually polished. Her consistency and
              attention to detail truly set her apart.
            </p>

            <div className="yt-testimonial__footer">
              <div className="yt-testimonial__author">
                <img
                  className="channel-photo"
                  src={channelPhoto}
                  alt="Channel"
                />
                <div className="yt-testimonial__author-text">
                  <strong>Heet Gudhka</strong>
                  <span>Front-End Developer · Client</span>
                </div>
              </div>
              <div className="yt-testimonial__chips">
                <span>Client Work</span>
                <span>Web Development</span>

                <span>UI/UX</span>
              </div>
            </div>
          </div>
        </a>
      </section>

      <Container className="videos" id="my-projects">
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
                    className="website-small-thumbnail"
                  />
                  <Card.Body>
                    <div className="card-body" style={{ display: "flex" }}>
                      {/* <img className="channel-photo" src={channelPhoto} /> */}
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

export default MyWork;
