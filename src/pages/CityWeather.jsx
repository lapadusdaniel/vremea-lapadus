import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { getCurrentWeather, getForecast } from '../api/weatherApi';
import "./CityWeather.css";


function CityWeather() {
  const { cityId } = useParams(); 
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cityMap = {
    bucuresti: "Bucharest",
    cluj: "Cluj-Napoca",
    timisoara: "Timișoara",
  };

  const cityDisplayMap = {
    bucharest: "București",
    "cluj-napoca": "Cluj",
    timisoara: "Timișoara",
  };

  const cityName = cityMap[cityId] || cityId; 

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);

        // vremea curentă
        const weatherResponse = await fetch(getCurrentWeather(cityName));
        const weatherData = await weatherResponse.json();

        // prognoza pe mai multe zile
        const forecastResponse = await fetch(getForecast(cityName));
        const forecastData = await forecastResponse.json();

        if (weatherData.cod !== 200) {
          throw new Error(weatherData.message);
        }

        setWeather(weatherData);
        setForecast(forecastData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [cityName]);

  if (loading) return <Container><p>Se încarcă datele...</p></Container>;
  if (error) return <Container><p>Eroare: {error}</p></Container>;

  return (
    <Container>
      <h1>Vremea în {cityDisplayMap[weather.name.toLowerCase()] || weather.name}</h1>
      <p>Temperatură: {weather.main.temp}°C</p>
      <p>Vânt: {weather.wind.speed} m/s</p>
      <p>Umiditate: {weather.main.humidity}%</p>

      <h2>Prognoza pe 5 zile</h2>
      {forecast && forecast.list ? (
        <ul>
          {forecast.list.slice(0, 5).map((item, index) => (
            <li key={index}>
              {new Date(item.dt * 1000).toLocaleString('ro-RO')} - {item.main.temp}°C
            </li>
          ))}
        </ul>
      ) : (
        <p>Nu există date despre prognoză.</p>
      )}
    </Container>
  );
}

export default CityWeather;