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
      "During the my engineering, I signed up to become a Microsoft Learn Student Ambassabor. And this decision led me to hosting 5+ session with more than 300 participants. I have always loved teaching and being a MLSA gave me an opportunity to interact with students from different nationalities and build a strong community.",
    images: [MLSA1, MLSA2, MLSA3, MLSA4],
  },
  {
    title: "CGPA: 9.43",
    description:
      "I am proud to share that my average CGPA over the 4 year s of engineering is 9.54. Admittely a high score like this was difficult to pull off as the first year was online and we were just getting a hang of understanding the concepts without a single offline class",
    images: [Grad, Grad2],
  },
    {
    title: "Beacon",
    description:
      "I brought my passion for teaching from MLSA to Beacon. Under this program, I impacted the lives of 15 underpriviledged students with lessons covering basics of Web Design. What makes me super happy is that out of those students, 3 of them now have a job as Junior Web Designers.",
    images: [Beacon_letter, beacon, Beacon2],
  },
  {
    title: "Speaker at VJTI Mumbai",
    description:
      "I had the immense priviledge of sharing my knowledge about 'blockchain' at {event name} hosted by {} at the VJTI college of engineering. I spoke to an audeince of 100+ college students and had an amazing expereince.",
    images: [VJTI,VJTI1],
  },
  {
    title: "Marathon Runner",
    description:
      "I picked up running as a way to blow off some steam and have participated in 5KM and 10KM categories. The feeling I get when i cross the finish line ",
    images: [Run, Run2, Run3],
  },
      {
    title: "CGPA: 9.43",
    description:
      "I write regularly on Linkedin and my contribution to the Web Developmet Safe got reognised with the 'Top Web Developent Voice'. ",
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
