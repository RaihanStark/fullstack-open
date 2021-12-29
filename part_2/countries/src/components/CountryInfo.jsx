import React, { useEffect, useState } from "react";

import axios from "axios";

function CountryInfo({ country }) {
  const [capitalWeather, setCapitalWeather] = useState();
  const [weatherLoading, setWeatherLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then((response) => {
        setCapitalWeather(response.data);
        setWeatherLoading(false);
      });
  }, []);
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]} </p>
      <p>Population: {country.population}</p>

      <h4>Languages</h4>
      <ul>
        {Object.entries(country.languages).map((language) => {
          return <li key={language[0]}>{language[1]}</li>;
        })}
      </ul>

      <img src={country.flags.png} alt="country flags" />

      {!weatherLoading && (
        <>
          <h4>Weather in {country.capital[0]}</h4>
          <div>
            <b>Temperature:</b> {capitalWeather.main.temp} Celcius
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${capitalWeather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <div>
            <b>Wind:</b> {capitalWeather.wind.speed}
          </div>
        </>
      )}
    </div>
  );
}

export default CountryInfo;
