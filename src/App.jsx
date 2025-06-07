import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Home from '../src/components/Home';
import ContactForm from './components/ContactForm';

function App() {
  return (

      <Routes>
        {/* Your other routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

  );
}

export default App;
