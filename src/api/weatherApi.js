const API_KEY = "4e736a18ce61027cfdf8e82f8508511d"; 

export function getCurrentWeather(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
}

export function getForecast(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
}