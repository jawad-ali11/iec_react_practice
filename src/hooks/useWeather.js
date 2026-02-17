
import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      console.error(err);
      setWeather(null);
      setError("Failed to fetch weather. Please check the city name.");
    } finally {
      setLoading(false);
    }
  };

  return { weather, fetchWeather, loading, error };
};
