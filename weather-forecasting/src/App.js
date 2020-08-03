import React, { useEffect, useState } from "react";
import City from "./components/CityPicker/cityPicker";

import WeatherMain from "./components/Page/main/main";

const App = () => {
  const [nx, setNx] = useState(0);
  const [ny, setNy] = useState(0);



  const cityCode = (cityNx, cityNy) => {
    setNx(cityNx);
    setNy(cityNy);

    console.log(nx, ny);
  };

  return (
    <div>
      <City cityParsing={cityCode} />
      <WeatherMain nx={nx} ny={ny} />

    </div>
  );
};

export default App;
