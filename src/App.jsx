import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Home from "./pages/Home";
import ContactForm from "./components/ContactForm";
import ProfilePage from "./components/ProfilePage";
import AchievementsPage from "./components/AchievementsPage";
import YouTubePlayer from "./components/YoutubePlayer";
import Freelance from "./components/Freelance";
import Project from "./components/project";
import Channels from "./components/Channels";
import MyWork from "./components/Videos";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // 4 seconds loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/fullvideo" element={<YouTubePlayer />} />
      <Route path="/freelance" element={<Freelance />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="/work" element={<MyWork />} />
    </Routes>
  );
}

export default App;
