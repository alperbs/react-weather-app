import React, { useState, useEffect } from "react";
import { useWeather } from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import "./styles/Weather.css";

function App() {
  const [city, setCity] = useState("");
  const [favorites, setFavorites] = useState([]);

  const { data, loading, error, fetchWeather, fetchWeatherByCoords } = useWeather();

  // Add to favorites
  const handleFavorite = (cityName) => {
    if (!favorites.includes(cityName)) {
      const updated = [...favorites, cityName];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  // Load favorites
  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavs) {
      setFavorites(savedFavs);
    }
  }, []);

  // City search
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
      setCity("");
    }
  };

  // Auto location on page load
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (err) => {
          console.log("Location denied:", err);
        }
      );
    }
  }, []);

  // Background theme
  const getBgClass = () => {
    if (!data) return "default-bg";

    const w = data.weather[0].main;

    if (w === "Clear") return "clear-bg";
    if (w === "Clouds") return "cloudy-bg";
    if (w === "Rain" || w === "Drizzle") return "rain-bg";
    if (w === "Snow") return "snow-bg";
    if (w === "Thunderstorm") return "storm-bg";

    return "default-bg";
  };

  return (
    <div className={`app-container ${getBgClass()}`}>
      <h1>Weather App</h1>

      {/* Search bar */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* Weather Card */}
      <WeatherCard weather={data} onFavorite={handleFavorite} />

      {/* Favorite Cities */}
      {favorites.length > 0 && (
        <div className="favorites-list">
          <h3>Favorite Cities</h3>
          <div className="fav-items">
            {favorites.map((fav) => (
              <button key={fav} onClick={() => fetchWeather(fav)}>
                {fav}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
