import { useEffect, useState } from "react";

import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCounties, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    const newVisitedCountries = [...visitedCounties, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    console.log("flag added");
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <>
      <h3>Countries : {countries.length}</h3>
      <div>
        <h5>Visited Countries : {visitedCounties.length}</h5>
        <ul>
          {visitedCounties.map((visitedCountry) => {
            return (
              <li key={visitedCountry.cca3}> {visitedCountry.name.common} </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h5>Visited Flags : {visitedFlags.length}</h5>
        <div id="image-container" className="flag-container">
          {visitedFlags.map((visitedFlag, idx) => {
            return <img key={idx} src={visitedFlag}></img>;
          })}
        </div>
      </div>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
