import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({ title }) => {
  const [weather, setWeather] = useState({});
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${title}&appid=${apiKey}&units=metric`
      )
      .then((data) => setWeather(data.data));
  }, [apiKey, title]);

  return weather.main ? (
    <>
      <p>temperature {weather.main.temp} celcius</p>
      <p>wind {weather.wind.speed} mph</p>
      <p>weather {weather.weather[0].main}</p>
    </>
  ) : (
    <span></span>
  );
};

export default Weather;
