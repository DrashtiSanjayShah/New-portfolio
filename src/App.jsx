import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Home from '../src/components/Home';
import ContactForm from './components/ContactForm';
import ProfilePage from './components/ProfilePage';
import Achievements from './components/Achievements';
function App() {
  return (

      <Routes>
        {/* Your other routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/profile" element={<ProfilePage />} />
         <Route path="/achievements" element={<Achievements />} />
      </Routes>

  );
}

export default App;
