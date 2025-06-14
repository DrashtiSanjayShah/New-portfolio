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
import Run from '../assets/images/Marathon.jpg';
import VJTI1 from '../assets/images/VJTI1.jpg';
// import VJTI2 from '../assets/images/VJTI2.jgp';
import golden_badge from '../assets/images/gold_badge.png'
const achievements = [
   {
    title: "MLSA",
    description:
      "During the 3rd year of my engineering, I decided to finally submit my entry to becoming a Microsoft Learn Student Ambassabor. And this decision led me to hosting 5+ session with more than 300 participants. I have always loved teaching and being a MLSA gave me an opportunity to interact with students form different nationalities and build a strong community.",
    images: [MLSA1, MLSA2, MLSA3, MLSA4],
  },
  {
    title: "CGPA: 9.43",
    description:
      "I have always been academically at the top of my game. While engineering was tough given the first half been during the pandemic, i have done well with the avergae CGPA of 9.54.",
    images: [Grad],
  },
    {
    title: "Beacon Chronicle Feature",
    description:
      "I always loved teaching and the ISR initiative gave me the opportunity to teach web design something that i do  professionaly as well for 15 underpriviledged students. 3 students now have a job as junior web designers and I couldnt be more happier.",
    images: [Beacon_letter, beacon],
  },
  {
    title: "Speaker at VJTI Mumbai",
    description:
      "I am always eager to learn new technologies. During college, I took up Blockchain as my Honors subject and this gave me the opportunity to speak at VJTI college of Engineering about the Bulding BLocks of Blockchain. Talking in frout oif a audence of 75+ begineers, I had an amazing expereince.",
    images: [VJTI1],
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
                    className="small-thumbnail" style={{ objectFit: 'contain'}}
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
