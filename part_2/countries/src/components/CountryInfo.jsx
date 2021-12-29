import React from "react";

function CountryInfo({ country }) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital[0]} </p>
      <p>Population: {country.population}</p>

      <h4>Languages</h4>
      <ul>
        {Object.entries(country.languages).map((language) => {
          return <li>{language[1]}</li>;
        })}
      </ul>

      <img src={country.flags.png} />
    </div>
  );
}

export default CountryInfo;
