import { React, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [country]);

  return (
    <>
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
          {Object.entries(country.languages).map(([key, value]) => {
            return <li key={key}>{value}</li>;
          })}
        </ul>
        <br></br>
        <img
          style={{ width: "200px" }}
          alt={country.flags.png}
          src={country.flags.png}
        ></img>
      </div>
      {weather && (
        <div>
          <h2>Wheater in {country.name.common}</h2>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)} º Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={`${country.name.common} weather`}
          ></img>
          <p>Wind: {weather.wind.speed}</p>
        </div>
      )}
    </>
  );
};

export default CountryInfo;
