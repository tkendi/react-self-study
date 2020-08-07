import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import City from "./components/City/cityPicker";
import WeatherMain from "./components/Page/main/main";

const App = () => {
  const [nx, setNx] = useState(0);
  const [ny, setNy] = useState(0);
  const CityChange = (
    cityNx: React.SetStateAction<number>,
    cityNy: React.SetStateAction<number>
  ) => {
    setNx(cityNx);
    setNy(cityNy);
  };
  return (
    <div>
      <Typography>Weather Forecasting</Typography>
      <City CityChange={CityChange} />
      <WeatherMain nx={nx} ny={ny} />
    </div>
  );
};

export default App;
