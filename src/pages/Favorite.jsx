import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Favorite.css"; 

function Favorite() {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [newCity, setNewCity] = useState("");
  const [cityWeathers, setCityWeathers] = useState({});

  useEffect(() => {
    console.log("Încărcare date favorite din localStorage...");
    const storedFavorites = localStorage.getItem("favoriteCities");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavoriteCities(parsedFavorites);
        }
      } catch (error) {
        console.error("Eroare la parsarea localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    console.log("Salvăm lista de favorite în localStorage:", favoriteCities);
    if (favoriteCities.length > 0) {
      localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
    }
  }, [favoriteCities]);

  useEffect(() => {
    const fetchWeatherForFavorites = async () => {
      const apiKey = "4e736a18ce61027cfdf8e82f8508511d"; 
      const updatedWeathers = {};

      for (const city of favoriteCities) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ro`
          );
          const data = await response.json();
          if (data.cod === 200) {
            updatedWeathers[city] = {
              temp: data.main.temp,
              condition: data.weather[0].description,
            };
          } else {
            updatedWeathers[city] = null;
          }
        } catch (err) {
          console.error("Eroare la fetch pentru orașul", city, err);
          updatedWeathers[city] = null;
        }
      }

      setCityWeathers(updatedWeathers);
    };

    if (favoriteCities.length > 0) {
      fetchWeatherForFavorites();
    } else {
      setCityWeathers({});
    }
  }, [favoriteCities]);

  const addCityToFavorites = () => {
    const cityName = newCity.trim().toLowerCase();
    if (cityName && !favoriteCities.includes(cityName)) {
      const updatedCities = [...favoriteCities, cityName];
      setFavoriteCities(updatedCities);
      localStorage.setItem("favoriteCities", JSON.stringify(updatedCities));
    }
    setNewCity("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addCityToFavorites();
    }
  };

  const removeCityFromFavorites = (city) => {
    const updatedCities = favoriteCities.filter((c) => c !== city);
    setFavoriteCities(updatedCities);
    localStorage.setItem("favoriteCities", JSON.stringify(updatedCities));
  };

  return (
    <div className="favorite-container">
      <h2>Favorite</h2>
      <p>Aici poți gestiona lista de orașe preferate.</p>

      <div className="add-favorite">
        <input
          type="text"
          placeholder="Adaugă un oraș..."
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addCityToFavorites}>Adaugă la favorite</button>
      </div>

      {favoriteCities.length === 0 ? (
        <p className="empty-text">Nu ai niciun oraș favorit adăugat.</p>
      ) : (
        <ul className="favorite-list">
          {favoriteCities.map((city, index) => {
            const weatherInfo = cityWeathers[city];
            return (
              <li key={index}>
                <Link to={`/city/${city}`} className="favorite-city-link">
                  {city}
                </Link>

                <button onClick={() => removeCityFromFavorites(city)}>
                  Șterge
                </button>

                {weatherInfo ? (
                  <div className="weather-details">
                    <p>Temperatură: {weatherInfo.temp}°C</p>
                    <p>Condiții: {weatherInfo.condition}</p>
                  </div>
                ) : (
                  <p className="no-data">
                    Nu am putut încărca datele meteo pentru acest oraș.
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Favorite;