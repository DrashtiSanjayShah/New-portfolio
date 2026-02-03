import React from "react";
import "./achievements.css";
import Header from "./Header";
import Bottomnav from "./BottomNav";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
    title: "Microsoft Learn Student Ambassador (MLSA)",
    tags: ["Community Building", "Technical Education", "Leadership" ],
    description:
      ["As a Microsoft Learn Student Ambassador, I led and hosted 5+ technical sessions attended by 300+ students across different backgrounds and nationalities.This role allowed me to combine my love for teaching with technology - building an engaged learning community while strengthening my skills in public speaking, mentorship, and technical communication."],
    images: [MLSA1, MLSA2, MLSA3, MLSA4],
  },
  {
    title: "Educational Impact through Beacon",
    tags:["Mentorship", "Social Impact" , "Web Education"],
    description:
      "Through the Beacon initiative, I taught the fundamentals of web design to 15 underprivileged students.The most meaningful outcome: three students transitioned into junior web designer roles, validating the real-world impact of accessible technical education.",
    images: [Beacon_letter, beacon, Beacon2],
  },
    {
    title: "Speaker at VJTI Mumbai",
    tags: ["Public Speaking" , "Knowledge Sharing"],
    description:
      "I was invited to speak on Blockchain fundamentals at an event hosted at Veermata Jijabai Technological Institute (VJTI), Mumbai. Addressing an audience of 100+ college students, I focused on simplifying complex concepts and encouraging students to explore emerging technologies with confidence.",
    images: [VJTI,VJTI1],
  },
  {
    title: "Academic Excellence in Engineering",
    tags: ["Consistency" , "Discipline"],
    description:
      "I graduated with a CGPA of 9.43, reflecting consistent academic performance across four years of engineering. Navigating a fully online first year strengthened my ability to learn independently, adapt quickly, and build strong conceptual foundations without traditional classroom support.",
    images: [Grad, Grad2]
  },
  {
    title: "Recognized Voice in Web Development (LinkedIn)",
    tags: ["Content Creation" , "Thought Leadership"],
    description:
      "I actively share insights and learnings in web development on LinkedIn, where my contributions were recognized with the “Top Web Development Voice” badge. Writing has become an extension of my teaching—helping others learn while sharpening my own understanding.",
    images: [ golden_badge],
  },
      {
    title: "Endurance Running & Discipline",
    tags: ["Consistency" , "Mental Strength" , "Balance"],
    description:
      "Long-distance running started as a way to manage stress and evolved into a practice of discipline and mental resilience.Having completed multiple 5km and 10km runs, I bring the same consistency and perseverance to my professional work.",
    images: [Run, Run2, Run3],
  },

];

const AchievementsPage = () => {
  return (
    <>
      <Header />
      <div className="achievements-container">
        <div className="hero-section">
          {/* <h1>My Achievements</h1> */}
        </div>

        {achievements.map((achievement, index) => (
          <div className="videoPlayer-container" key={index}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
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
