import React, { useEffect, useState } from "react";
import { weatherData } from "../../../api";
import { Typography, CssBaseline, StylesProvider } from "@material-ui/core";
import Clock from "../../Clock/Clock";
import clear from "../../../img/sun.png";
import snow from "../../../img/snow.png";
import shower from "../../../img/meteor-shower.png";
import ice from "../../../img/ice.png";
import rainy from "../../../img/rain.png";
import styles from "../styles/main.module.css"

interface Props {
  nx: number;
  ny: number;
}

const WeatherMain: React.FC<Props> = (props: Props) => {
  const [temp, setTemp] = useState<string>("0");
  const [rain, setRain] = useState<string>("0");
  const [type, setType] = useState<string>("0");
  useEffect(() => {
    async function fetchedData() {
      const data = await weatherData(props.nx, props.ny);
      setTemp(data.TMP);
      setRain(data.RNH);
      setType(data.SKY);
    }
    fetchedData();
  }, [props.nx, props.ny]);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={styles.mainForm}>
        <div>
          {parseInt(type) === 1 ? (
            <img src={rainy} alt="rain" className={styles.imgForm} />
          ) : parseInt(type) === 2 ? (
            <img src={ice} alt="ice" className={styles.imgForm} />
          ) : parseInt(type) === 3 ? (
            <img src={snow} alt="snow" className={styles.imgForm} />
          ) : parseInt(type) === 4 ? (
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
          <Typography>시간당 강수량: {rain}</Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeatherMain;
