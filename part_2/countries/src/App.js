import { useEffect, useState } from "react";
import axios from "axios";

import CountryInfo from "./components/CountryInfo";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filterCountries = (e) => {
    const filteredCountriesObj = countries.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setCountryName(e.target.value);
    setFilteredCountries(filteredCountriesObj);
  };

  return (
    <>
      {countries.length === 0 ? (
        "Loading..."
      ) : (
        <div>
          Find Countries:{" "}
          <input value={countryName} onChange={filterCountries} />
        </div>
      )}

      {filteredCountries.length > 10 ? (
        "Too many matches, specify another filter"
      ) : filteredCountries.length === 1 ? (
        <CountryInfo country={filteredCountries[0]} />
      ) : (
        filteredCountries.map((country) => {
          return <div key={country.name.common}>{country.name.common}</div>;
        })
      )}
    </>
  );
}

export default App;
