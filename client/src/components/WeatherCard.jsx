import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, sys, main, weather, wind, coord, clouds } = data;

  const weatherInfo = weather[0];
  console.log(weatherInfo)

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', width: '320px', margin: '0 auto', background: '#f0f8ff',boxShadow: '0 4px 8px rgba(0,0,0,0.1)', color: '#333'}}>
      <h2>{name}, {sys.country}</h2>
      <p><strong>Condition:</strong> {weatherInfo.main} ({weatherInfo.description})</p>
      <p><strong>Temperature:</strong> {main.temp}°C</p>
      <p><strong>Feels Like:</strong> {main.feels_like}°C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Pressure:</strong> {main.pressure} hPa</p>
      <p><strong>Wind:</strong> {wind.speed} m/s</p>
      <p><strong>Cloudiness:</strong> {clouds.all}%</p>
      <p><strong>Coordinates:</strong> {coord.lat}, {coord.lon}</p>
    </div>
  );
};

export default WeatherCard;
