import React from "react";
import CountryInfo from "./CountryInfo";
import Button from "./Button";
import { useState } from "react";
import { useEffect } from "react";

const Countries = ({ countries }) => {
  /* 
    - 0: show a list of countries
    - 1: show a unique country
    - -1: show the "to many matches.." message
  */
  const [showState, setShowState] = useState(0);
  const [selectedCountry, setSelectCountry] = useState(0);

  useEffect(() => {
    if (countries.length === 1) {
      setShowState(1);
      setSelectCountry(0);
    } else if (countries.length <= 10) {
      setShowState(0);
    } else {
      setShowState(-1);
    }
  }, [countries]);

  const showInputHandler = (e) => {
    setShowState(1);
    setSelectCountry(e.target.value);
  };

  const render = () => {
    switch (showState) {
      case 0:
        return (
          <ul>
            {countries.map((country, i) => (
              <li key={country.name.common}>
                {country.name.common}{" "}
                <Button
                  text={"show"}
                  value={i}
                  handleClick={showInputHandler}
                ></Button>
              </li>
            ))}
          </ul>
        );
      case 1:
        return <CountryInfo country={countries[selectedCountry]}></CountryInfo>;
      case -1:
        return <p>Too many matches, specify another filter</p>;
      default:
        break;
    }
  };

  return <div>{render()}</div>;
};

export default Countries;
