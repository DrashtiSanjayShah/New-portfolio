import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Home from '../src/components/Home';
import ContactForm from './components/ContactForm';
import ProfilePage from './components/ProfilePage';

function App() {
  return (

      <Routes>
        {/* Your other routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

  );
}

export default App;
