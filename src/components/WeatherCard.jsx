import React from "react";
import "../styles/Weather.css";

const WeatherCard = ({ weather, onFavorite }) => {
  if (!weather) return null;

  const { name, main, weather: info, wind, sys } = weather;

  const isNight = () => {
    const now = Date.now() / 1000;
    const { sunrise, sunset } = sys;
    return now < sunrise || now > sunset;
  };

  return (
    <div className={`weather-card ${isNight() ? "night" : "day"}`}>
      {/* Favorite Button */}
      <button className="fav-btn" onClick={() => onFavorite(name)}>
        ⭐
      </button>

      <h2>{name}</h2>

      <img
        alt="weather icon"
        src={`https://openweathermap.org/img/wn/${info[0].icon}@2x.png`}
      />

      <h1>{Math.round(main.temp)}°C</h1>
      <p className="description">{info[0].description}</p>

      <div className="details">
        <span>Humidity: {main.humidity}%</span>
        <span>Wind: {wind.speed} m/s</span>
      </div>
    </div>
  );
};

export default WeatherCard;
