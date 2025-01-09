// const API_KEY = '35296f30673daf1c51958382997bdd25';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=35296f30673daf1c51958382997bdd25`;

import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null); // Store weather data
  const [error, setError] = useState(""); // Store error state for invalid city

  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=35296f30673daf1c51958382997bdd25`;
    try {
      const response = await axios.get(url);
      setWeatherData(response.data); // Set weather data if city is valid
      setError(""); // Reset any previous error
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("City not found!"); // Set error message for invalid city
      setWeatherData(null); // Clear any previous weather data
    }
  };

  return (
    <div className="app">
      <div className='main-con'>
        <SearchBar fetchWeather={fetchWeather} />
        <WeatherCard weather={weatherData} error={error} /> {/* Pass error to WeatherCard */}
      </div>
    </div>
  );
};

export default App;
