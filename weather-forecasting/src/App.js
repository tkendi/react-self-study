import React, { useEffect } from "react";
import { weatherData } from "./api";
import City from "./components/CityPicker/cityPicker";

const App = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await weatherData(60, 127)
      console.log(data)
    }
    fetchData()
    return () => {
      console.log("I'm dying...");
    };
  }, []);
  return (
    <div>
      <City />
    </div>
  );
};

export default App;
