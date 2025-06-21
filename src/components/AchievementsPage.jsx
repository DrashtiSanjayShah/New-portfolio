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
import Grad2 from '../assets/images/Grad2.jpg';
import Beacon_letter from '../assets/images/beacon_letter.png';
import beacon from '../assets/images/Beacon.jpg';
import Beacon2 from '../assets/images/Beacon2.jpg';
import Run from '../assets/images/Marathon.jpg';
import Run2 from '../assets/images/Marathon2.jpg';
import Run3 from '../assets/images/Marathon3.jpg';
import VJTI1 from '../assets/images/VJTI1.jpg';
import VJTI from '../assets/images/VJTI.jpg';

// import VJTI2 from '../assets/images/VJTI2.jgp';
import golden_badge from '../assets/images/gold_badge.png'
const achievements = [
   {
    title: "MLSA",
    description:
      "During my engineering, I signed up to become a Microsoft Learn Student Ambassador. This decision led me to host 5+ sessions with over 300 participants. I have always loved teaching, and being an MLSA gave me the opportunity to interact with students from different nationalities and build a strong community.",
    images: [MLSA1, MLSA2, MLSA3, MLSA4],
  },
  {
    title: "CGPA: 9.43",
    description:
      "I am proud to share that my average CGPA over the four years of engineering is 9.54. Admittedly, achieving a high score like this was challenging, especially since the first year was entirely online, and we were still getting the hang of understanding core concepts without a single offline class.",
    images: [Grad, Grad2],
  },
    {
    title: "Beacon",
    description:
      "I carried my passion for teaching from MLSA to Beacon. Under this program, I had the opportunity to impact the lives of 15 underprivileged students by teaching them the basics of web design. What makes me incredibly happy is that three of them now have jobs as junior web designers.",
    images: [Beacon_letter, beacon, Beacon2],
  },
  {
    title: "Speaker at VJTI Mumbai",
    description:
      "I had the immense privilege of sharing my knowledge about Blockchain at {event name}, hosted by {organization name} at VJTI College of Engineering. I spoke to an audience of over 100 college students and had an amazing experience.",
    images: [VJTI,VJTI1],
  },
  {
    title: "Marathon Runner",
    description:
      "What began as a stress-reliever quickly turned into a passion. I’ve run in several 5KM and 10KM events, and the high of crossing the finish line never gets old — it's a reminder of both discipline and joy.",
    images: [Run, Run2, Run3],
  },
      {
    title: "CGPA: 9.43",
    description:
      "I write regularly on LinkedIn, and my contributions to the web development space were recognized with the 'Top Web Development Voice' badge.",
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
                    alt={achievement.title} loading="lazy"
                    className="small-thumbnail" style={{ objectFit: 'contain'}}
                    onClick={() => window.open(img, "_blank")}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="achievement-right-side-video" style={{ width: '60%'}}>
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
