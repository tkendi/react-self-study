import React, { ComponentState } from "react";
import { TextField, MenuItem, CssBaseline } from "@material-ui/core";
import data from "../../city.json";
import styles from './cityPicker.module.css'

console.log(data.nx);
console.log(data.ny);

interface Props {
  CityChange: (nx: number, ny: number) => void;
}

const cityPicker: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className = {styles.pickerForm}>
        <TextField
          select
          label="City"
          helperText="List of city"
          onChange={(e) =>
            props.CityChange(
              data.nx[parseInt(e.target.value)],
              data.ny[parseInt(e.target.value)]
            ) as ComponentState
          }
          className = {styles.picker}
        >
          {data.city.map((city, index) => {
            return (
              <MenuItem key={city} value={index}>
                {city}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
    </React.Fragment>
  );
};

export default cityPicker;
