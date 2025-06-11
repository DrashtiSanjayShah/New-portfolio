// AchievementsPage.jsx
import React from "react";
import "./achievements.css";
import { FaLinkedin, FaTrophy, FaGraduationCap } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import Header from './Header';
import Bottomnav from './BottomNav';


const achievements = [
  {
    title: "Beta Microsoft Learn Student Ambassador",
    description:
      "Conducted sessions on Generative AI and Microsoft Cloud Skills Challenge, reaching 100+ students.",
    image: "https://cdn.worldvectorlogo.com/logos/microsoft-learn-1.svg",
    icon: <PiCertificateBold className="card-icon" />,
  },
  {
    title: "CGPA: 9.43",
    description: "Consistently ranked in the top 10% of the batch across all semesters.",
    image: "https://cdn-icons-png.flaticon.com/512/2936/2936686.png",
    icon: <FaGraduationCap className="card-icon" />,
  },
  {
    title: "Beacon Chronicle Feature",
    description:
      "Recognized in Beacon Chronicle for impactful tech projects and community involvement.",
    image: "https://i.imgur.com/gU2Kfpr.jpeg",
    icon: <FaTrophy className="card-icon" />,
  },
  {
    title: "Speaker at VJTI Mumbai",
    description:
      "Delivered a keynote on balancing engineering with freelancing and building a tech brand.",
    image: "https://vjti.ac.in/wp-content/uploads/2023/05/VJTI-Logo.png",
    icon: <FaTrophy className="card-icon" />,
  },
  {
    title: "Runner-Up @ Hackathon",
    description:
      "Secured 2nd position for creating a finance dashboard using React and Firebase.",
    image: "https://cdn-icons-png.flaticon.com/512/3709/3709292.png",
    icon: <FaTrophy className="card-icon" />,
  },
  {
    title: "LinkedIn Top Voice (Student)",
    description:
      "Awarded LinkedIn Golden Badge for consistently contributing to tech discussions.",
    image:
      "https://static.licdn.com/sc/h/1bt1uwq5akv756knzdj4l6cdc",
    icon: <FaLinkedin className="card-icon" />,
  },
];

const AchievementsPage = () => {
  return (
    <>
    <Header />
    <div className="achievements-container">
      <div className="hero-section">
        <h1>My Achievements</h1>
        <p>Here’s a glimpse into my journey so far 📍</p>
      </div>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="achievement-image"
            />
            <div className="achievement-content">
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Bottomnav />
    </>
  );
};

export default AchievementsPage;
