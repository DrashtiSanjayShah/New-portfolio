import React from "react";
import "./achievements.css";
import Header from "./Header";
import Bottomnav from "./BottomNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import MLSA1 from '../assets/images/MLSA1.png';
import MLSA2 from '../assets/images/MLSA2.png';
import MLSA3 from '../assets/images/MLSA3.png';
import MLSA4 from '../assets/images/MLSA4.png';
import Grad from '../assets/images/Grad.jpg';
import Beacon_letter from '../assets/images/beacon_letter.png';
import beacon from '../assets/images/Beacon.jpg';
import Run from '../assets/images/Marathon.jpg'
import golden_badge from '../assets/images/gold_badge.png'
const achievements = [
   {
    title: "MLSA",
    description:
      "Consistently ranked in the top 10% of the batch across all semesters.",
    images: [MLSA1, MLSA2, MLSA3, MLSA4],
  },
  {
    title: "CGPA: 9.43",
    description:
      "Consistently ranked in the top 10% of the batch across all semesters.",
    images: [Grad],
  },
    {
    title: "Beacon Chronicle Feature",
    description:
      "Consistently ranked in the top 10% of the batch across all semesters.",
    images: [Beacon_letter, beacon],
  },
  {
    title: "Speaker at VJTI Mumbai",
    description:
      "Delivered a keynote on balancing engineering with freelancing and building a tech brand.",
    images: ["https://vjti.ac.in/wp-content/uploads/2023/05/VJTI-Logo.png"],
  },
  {
    title: "Marathon Runner",
    description:
      "Secured 2nd position for creating a finance dashboard using React and Firebase.",
    images: [Run],
  },
      {
    title: "CGPA: 9.43",
    description:
      "Consistently ranked in the top 10% of the batch across all semesters.",
    images: [golden_badge],
  },

];

const AchievementsPage = () => {
  return (
    <>
      <Header />
      <div className="achievements-container">
        <div className="hero-section">
          <h1>My Achievements</h1>
        </div>

        {achievements.map((achievement, index) => (
          <div className="videoPlayer-container" key={index}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 2500 }}
              className="achievement-swiper"
            >
              {achievement.images.map((img, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <img
                    src={img}
                    alt={achievement.title}
                    className="small-thumbnail"
                    onClick={() => window.open(img, "_blank")}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="right-side-video">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Bottomnav />
    </>
  );
};

export default AchievementsPage;
