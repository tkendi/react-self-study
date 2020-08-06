import React, { ComponentState } from "react";
import { TextField, MenuItem, CssBaseline } from "@material-ui/core";
import Autocomplete from "@material-ui/lab";
import data from "../../city.json";

console.log(data.nx);
console.log(data.ny);

interface Props {
  CityChange: (nx: number, ny: number) => void;
}

const cityPicker: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ width: 300 }}>
        <TextField
          select
          label="City"
          helperText="List of city"
          onChange={(e) => props.CityChange(data.nx[parseInt(e.target.value)], data.ny[parseInt(e.target.value)]) as ComponentState}
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
