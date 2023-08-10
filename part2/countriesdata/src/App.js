import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Componentes/Filter";
import Countries from "./Componentes/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredList, setFilteredList] = useState(countries);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterOnChange = (event) => {
    if (event.target.value === "") {
      setFilteredList(countries);
    } else {
      setFilteredList(
        countries.filter(
          (country) =>
            country.name.common
              .toLowerCase()
              .search(event.target.value.toLowerCase()) !== -1
        )
      );
    }
  };

  return (
    <div className="App">
      <Filter onChangeHandler={handleFilterOnChange}></Filter>
      <Countries countries={filteredList}></Countries>
    </div>
  );
}

export default App;
