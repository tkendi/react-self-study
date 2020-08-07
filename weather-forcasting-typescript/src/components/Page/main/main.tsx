import React, { useEffect, useState } from "react";
import { weatherData } from "../../../api";
import { Typography, CssBaseline } from "@material-ui/core";
import Clock from '../../Clock/Clock'

interface Props {
  nx: number;
  ny: number;
}

const WeatherMain: React.FC<Props> = (props: Props) => {
  const [temp, setTemp] = useState("0");
  const [rain, setRain] = useState("0");
  const [type, setType] = useState("0");
  useEffect(() => {
    async function fetchedData() {
      const data = await weatherData(props.nx, props.ny);
      console.log(data);
      setTemp(data.TMP);
      setRain(data.RNH);
      setType(data.SKY);
    }
    fetchedData();
  }, [props.nx, props.ny]);

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <div>
          {parseInt(type) === 1 ? (
            <Typography>rain</Typography>
          ) : parseInt(type) === 2 ? (
            <Typography>ic</Typography>
          ) : parseInt(type) === 3 ? (
            <Typography>snow</Typography>
          ) : parseInt(type) === 4 ? (
            <Typography>shower</Typography>
          ) : (
            <Typography>clear</Typography>
          )}
          <Clock />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeatherMain;
