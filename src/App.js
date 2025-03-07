import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CityWeather from './pages/CityWeather';
import Page404 from './pages/Page404';
import Favorites from './pages/Favorite';
import Informatii from './pages/Informatii';
import Contact from './pages/Contact';
import Bancuri from './pages/Bancuri';
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (event) => {
      if (event.clientY === 0) { 
        timeoutId = setTimeout(() => {
          setShowPopup(true);
        }, 500);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Router>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Thank you for visiting!</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:cityId" element={<CityWeather />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/informatii" element={<Informatii />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bancuri" element={<Bancuri />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;