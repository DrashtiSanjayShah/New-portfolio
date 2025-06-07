import React from "react";
import "./ProfilePage.css";
import drashtiImage from "../assets/images/drashti-photo.png"; // Use your actual image path
import BottomNav from "./BottomNav";

const qualifications = [
  "Bachelor of Engineering in Information Technology",
  "4+ years of Web Development experience",
  "Microsoft Learn Student Ambassador (Beta)",
  "Technical Writer | GitHub Contributor",
  "Freelance Website Designer",
];

const ProfilePage = () => {
  return (
    <>
    <div className="profile-page">
      <div className="left-section">
        <img src={drashtiImage} alt="Drashti" className="creator-image" />
        <h2 className="intro-text">Hello, this is Drashti</h2>
      </div>
      <div className="right-section">
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
