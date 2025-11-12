import React, { useState, useEffect } from 'react';
import { FaCloud, FaSun, FaCloudRain } from 'react-icons/fa';

const WeatherWidget = ({ accentColor }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = '14f61e16a54500363c42ba78d374bf17'; // Your API key
  const CITY = 'London'; // Change to any city

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].description,
          city: data.name,
        });
      })
      .catch(error => console.error('Error fetching weather:', error));
  }, [API_KEY, CITY]);

  const getIcon = (condition) => {
    if (condition.includes('clear')) return <FaSun />;
    if (condition.includes('rain')) return <FaCloudRain />;
    return <FaCloud />;
  };

  return (
    <div className="glassmorphism p-4 w-full max-w-sm">
      <h3 className="text-lg font-bold mb-2">Weather</h3>
      {weather ? (
        <div className="flex items-center space-x-2">
          {getIcon(weather.condition)}
          <div>
            <p className="text-xl">{weather.temp}°C</p>
            <p className="text-sm">{weather.condition}</p>
            <p className="text-sm">{weather.city}</p>
          </div>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherWidget;