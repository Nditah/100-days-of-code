import React, { useEffect, useContext } from "react";
import "./App.css";
import _ from "underscore";
import { fetchAllCountries } from "../services/fetchAllCountries";
import Main from "../components/layout/main/Main";
import CountriesContext from "../context/countriesContext";

const App = () => {
    const countriesContext = useContext(CountriesContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllCountries();

      countriesContext.setCountries(_.sample(result.data, 40));
      countriesContext.setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="el">
      <Main />
    </div>
  );
};

export default App;
