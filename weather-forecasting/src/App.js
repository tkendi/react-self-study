import React, { useEffect, useState } from "react";
import { weatherData } from "./api";
import City from "./components/CityPicker/cityPicker";
import { Typography } from "@material-ui/core";

const App = () => {
  const [nx, setNx] = useState(0);
  const [ny, setNy] = useState(0);
  const [temp, setTemp] = useState(0);
  const [rain, setRain] = useState(0);
  const [type, setType] = useState(0);
  const [baseTime, setBaseTime] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await weatherData(nx, ny);
      setBaseTime(data.baseTime);
      setTemp(data.TMP);
      setRain(data.RNH);
      setType(data.SKY);
      console.log(data);
    }
    fetchData();
    return () => {
      console.log("I'm dying...");
    };
  }, [nx, ny]);

  const cityCode = (cityNx, cityNy) => {
    setNx(cityNx);
    setNy(cityNy);

    console.log(nx, ny);
  };

  return (
    <div>
      <City cityParsing={cityCode} />
      <Typography>{baseTime}</Typography>
      <Typography>{temp}&deg;C</Typography>
      <Typography>{type}</Typography>
      {type === 1 ? (
        <Typography>Rain</Typography>
      ) : type === 2 ? (
        <Typography>Rain/Snow</Typography>
      ) : type === 3 ? (
        <Typography>Snow</Typography>
      ) : type == 4 ? (
        <Typography>Shower</Typography>
      ) : (
        <Typography>clear</Typography>
      )}
    </div>
  );
};

export default App;
