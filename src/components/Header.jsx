import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Header.css';

function Header() {
  const [searchCity, setSearchCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchCity.trim() !== "") {
      navigate(`/city/${searchCity.toLowerCase()}`);
      setSearchCity(""); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <Container>
        
        <div className="nav-container">
          <ul className="nav-links">
            <li><Link to="/">Acasă</Link></li>
            <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className="dropdown-container">
              <span>Top orașe</span>
              {isDropdownOpen && (
                <ul className="dropdown">
                  <li><Link to="/city/bucuresti">București</Link></li>
                  <li><Link to="/city/timisoara">Timișoara</Link></li>
                  <li><Link to="/city/iasi">Iași</Link></li>
                  <li><Link to="/city/oradea">Oradea</Link></li>
                  <li><Link to="/city/cluj-napoca">Cluj-Napoca</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/favorites">Favorite</Link></li>
            <li><Link to="/informatii">Informații</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/bancuri">Bancuri</Link></li>
          </ul>
          <div className="search-bar">
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Caută un oraș..."
            />
            <button onClick={handleSearch}>Caută</button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;