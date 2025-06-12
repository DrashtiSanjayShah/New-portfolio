import React from "react";
import drashtiImage from "../assets/images/drashti-photo.png";
import Header from "../components/Header";
import BottomNav from "./BottomNav";

const qualifications = [
    "Freelance Website Designer",
  "Technical Writer | GitHub Contributor",
  "Conducted sessions on Generative AI and Microsoft Cloud",
    "4+ years of Web Development experience",
  "Bachelor of Engineering in Information Technology: CGPA - 9.57",

  "Microsoft Learn Student Ambassador (Beta)",

  "Developed custom websites for small businesses and creators",
  "Passionate about clean UI and helpful tech content",
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
                I'm a web developer, tech speaker, and student ambassador who
                loves building clean, user-first websites and explaining
                technical things simply. Whether it's a tutorial or a portfolio,
                I try to keep it practical and helpful.
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
