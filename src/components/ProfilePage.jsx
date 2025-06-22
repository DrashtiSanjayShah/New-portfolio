import React from "react";
import drashtiImage from "../assets/images/drashti-photo.png";
import Header from "../components/Header";
import BottomNav from "./BottomNav";

const qualifications = [
  "5+ years of hands-on experience in modern web development",
  "Known for making complex tech feel simple",
  "Bachelor’s in Information Technology (CGPA: 9.57)",
  "Led technical training sessions with more than 400+ participants",
  "Freelance developer for clients across education and small business sectors",
  "Delivered invited talks and workshops at academic and tech forums",
  "Skilled in HTML, CSS, JavaScript, React, Tailwind, and Git workflows",
  "Focus on clean UI, performance, and user-first design",
];

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className="profile-page-container">
        {/* Top Section */}
        <div className="top-section">
          {/* Left - Image */}
          <div className="top-left">
            <img src={drashtiImage} alt="Drashti" className="profile-image" />
          </div>

          {/* Right - Info */}
          <div className="top-right">
            <h2 className="name">Drashti Shah</h2>
            <div className="details">
              <div className="email">
                @thatonegirlinbtech . 600+ followers across channels
              </div>
              <p className="email"> drashtisanjayshah@gmail.com</p>
              <p className="location">Mumbai, India</p>

              <p className="description">
                I'm a frontend developer and freelance web designer with over 4
                years of experience building responsive, user-friendly websites.
                I've taught web design, hosted sessions on Generative AI and
                Microsoft Cloud, and spoken at student tech events across
                communities. I hold a degree in Information Technology with a
                9.57 CGPA. When I’m not coding or teaching, you’ll find me
                crocheting plushies or simplifying tech concepts just for fun.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <h2 className="section-title">Qualifications</h2>
          <ul className="qualification-list">
            {qualifications.map((item, index) => (
              <li key={index} className="qualification-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default ProfilePage;
