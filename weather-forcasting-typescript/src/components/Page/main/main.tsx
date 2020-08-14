import React, { useEffect, useState } from "react";
import * as weatherAPI from "../../../lib/api/weather";
import { Typography, CssBaseline, StylesProvider } from "@material-ui/core";
import Clock from "../../Clock/Clock";
import clear from "../../../img/sun.png";
import snow from "../../../img/snow.png";
import shower from "../../../img/meteor-shower.png";
import ice from "../../../img/ice.png";
import rainy from "../../../img/rain.png";
import styles from "../styles/main.module.css";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  nx: any;
  ny: any;
}

const WeatherMain: React.FC<Props> = (props:Props) => {
  // const { data, error } = useSelector(({weather}) => ({
  //   data: weather.data,
  //   error: weather.error,
  // }));

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(weatherRead({ nx, ny }));
  //   console.log(dispatch(weatherRead({ nx, ny })));
  // }, [dispatch, nx, ny]);

  const [temp, setTemp] = useState("")
  const [rain, setRain] = useState("")
  const [type, setType] = useState("")

  useEffect(() => {
    async function fetchedData() {
      const data = await weatherAPI.weatherData(props.nx, props.ny)
      console.log(data)
      setTemp(data.TMP)
      setRain(data.RNH)
      setType(data.SKY)
    }
    fetchedData()
  }, [props.nx, props.ny])

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
          ) : parseInt(type) === 0 ? (
            <img src={clear} alt="clear" className={styles.imgForm} />
          ) : (
            <Typography className={styles.imgForm}>
              Choose the region
            </Typography>
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
