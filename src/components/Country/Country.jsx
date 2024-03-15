import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "going"}`}>
      <h3 style={{ color: visited ? "black" : "red" }}>
        Name : {name?.common}{" "}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Code : {cca3}</p>

      <button
        onClick={() => {
          handleVisitedCountry(country);
        }}
      >
        Mark Visited
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.png);
        }}
      >
        Visited Flag
      </button>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited the country" : "I want to visit this country"}
    </div>
  );
};

export default Country;
