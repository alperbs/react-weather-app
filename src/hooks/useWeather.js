import { useState } from "react";
import axios from "axios";

export const useWeather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ŞEHİR ADI İLE HAVA DURUMU GETİR (EDİRNE, İSTANBUL vs.)
  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            units: "metric",
            appid: process.env.REACT_APP_WEATHER_API_KEY,
          },
        }
      );

      setData(res.data);
    } catch (err) {
      setError("Şehir bulunamadı veya bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  // 📌 KOORDİNATLARLA HAVA DURUMU GETİR (LAT - LON)
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: lat,
            lon: lon,
            units: "metric",
            appid: process.env.REACT_APP_WEATHER_API_KEY,
          },
        }
      );

      setData(res.data);
    } catch (err) {
      setError("Konum bilgisi alınamadı.");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchWeather, fetchWeatherByCoords };
};
