import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import clear from "../../../img/sun.png";
import snow from "../../../img/snow.png";
import shower from "../../../img/meteor-shower.png";
import ice from "../../../img/ice.png";
import rainy from "../../../img/rain.png";
import { weatherData } from "../../../api";

const WeatherMain = ({ nx, ny }) => {
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

  return (
    <React.Fragment>
      <Typography>{baseTime}</Typography>
      <Typography>{temp}&deg;C</Typography>
      <Typography>{rain}</Typography>
      {type === 1 ? (
        <img src={rainy} alt="rain" />
      ) : type === 2 ? (
        <img src={ice} alt="ice" />
      ) : type === 3 ? (
        <img src={snow} alt="snow" />
      ) : type === 4 ? (
        <img src={shower} alt="shower" />
      ) : (
        <img src={clear} alt="clear" />
      )}
    </React.Fragment>
  );
};

export default WeatherMain;
