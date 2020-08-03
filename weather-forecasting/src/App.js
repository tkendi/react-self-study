import React, { useState, useEffect } from "react";
import { weatherData } from "./api";
import City from "./components/CityPicker/cityPicker";

const App = () => {
  const [number, setNumber] = useState(0);
  useEffect(async () => {
    const data = await weatherData(98, 76)
    console.log(data);
    return () => {
      console.log("I'm dying...");
    };
  }, [number]);
  return (
    <div>
      <h2>number is {number}</h2>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
};

export default App;
