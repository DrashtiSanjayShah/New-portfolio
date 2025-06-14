import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Home from '../src/components/Home';
import ContactForm from './components/ContactForm';
import ProfilePage from './components/ProfilePage';
import AchievementsPage from './components/AchievementsPage';
import YouTubePlayer from './components/YoutubePlayer';
import Freelance from './components/Freelance';
function App() {
  return (

      <Routes>
        {/* Your other routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/profile" element={<ProfilePage />} />
         <Route path="/achievements" element={<AchievementsPage />} />
         <Route path="/fullvideo" element={<YouTubePlayer />} />
         <Route path="/freelance" element={<Freelance />} />
      </Routes>

  );
}

export default App;
