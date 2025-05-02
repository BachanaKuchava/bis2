import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contacts';

const App = () => (
  <Router>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;