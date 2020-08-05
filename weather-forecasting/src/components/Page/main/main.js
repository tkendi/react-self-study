import React, { useEffect, useState } from "react";
import { Typography, CssBaseline } from "@material-ui/core";
import clear from "../../../img/sun.png";
import snow from "../../../img/snow.png";
import shower from "../../../img/meteor-shower.png";
import ice from "../../../img/ice.png";
import rainy from "../../../img/rain.png";
import { weatherData } from "../../../api";
import Clock from "../../Clock/clock";
import styles from "./main.module.css";

const WeatherMain = ({ nx, ny }) => {
  const [temp, setTemp] = useState(0);
  const [rain, setRain] = useState(0);
  const [type, setType] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await weatherData(nx, ny);
      setTemp(data.TMP);
      setRain(data.RNH);
      setType(data.SKY);
    }
    fetchData();
  }, [nx, ny]);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={styles.mainForm}>
        <div>
          {type === "1" ? (
            <img src={rainy} alt="rain" className={styles.imgForm} />
          ) : type === "2" ? (
            <img src={ice} alt="ice" className={styles.imgForm} />
          ) : type === "3" ? (
            <img src={snow} alt="snow" className={styles.imgForm} />
          ) : type === "4" ? (
            <img src={shower} alt="shower" className={styles.imgForm} />
          ) : (
            <img src={clear} alt="clear" className={styles.imgForm} />
          )}
          <Clock />
        </div>
        <div className={styles.textForm}>
          <Typography className={styles.tempText} variant="h2" component="h1">
            {temp}&deg;
          </Typography>
          <Typography>{rain}</Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeatherMain;
