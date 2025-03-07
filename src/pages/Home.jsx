import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./Home.css";
import weatherImage from "../images/weatherimage.avif";

function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchCity.trim() !== "") {
      navigate(`/city/${searchCity.toLowerCase()}`);
      setSearchCity(""); 
    }
  };

  
  useEffect(() => {
    const cities = ["București", "Cluj-Napoca", "Timișoara", "Iași", "Oradea", "Brașov"];
    const API_KEY = "4e736a18ce61027cfdf8e82f8508511d"; 

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          cities.map(city =>
            axios.get("https://api.openweathermap.org/data/2.5/weather", {
              params: {
                q: city,
                appid: API_KEY,
                units: "metric",
                lang: "ro",
              },
            })
          )
        );
        const data = responses.map(response => ({
          name: response.data.name,
          temp: `${response.data.main.temp}°C`,
          condition: response.data.weather[0].description,
        }));
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="home-container">
      
      
      <img src={weatherImage} alt="Weather" className="weather-image" />

      <h2>Vremea by Lăpăduș Daniel</h2>
      <p>Verifică prognoza meteo rapid și ușor, pentru orice oraș din România.</p>

      <div className="search-bar">
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Introdu un oraș..."
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Caută</button>
      </div>

      <div className="weather-cards">
        {weatherData.length > 0 ? (
          weatherData.map((city, index) => (
            <Card
              key={index}
              className="weather-card"
              onClick={() => navigate(`/city/${city.name.toLowerCase().replace(/\s/g, "-")}`)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>Temperatură: {city.temp}</Card.Text>
                <Card.Text>Condiții: {city.condition}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Încărcare date...</p>
        )}
      </div>
    </Container>
  );
}

export default Home;