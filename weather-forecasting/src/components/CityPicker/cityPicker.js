import React from "react";
import { Typography, TextField, MenuItem } from "@material-ui/core";

const cityPciker = () => {
  const data = {
    city: [
      "Seoul",
      "Busan",
      "Daegu",
      "Incheon",
      "Gwangu",
      "Daejeon",
      "Ulsan",
      "Jeju",
    ],
    nx: ["60", "98", "89", "55", "58", "67", "102", "52"],
    ny: ["127", "76", "90", "124", "74", "100", "84", "38"],
  };

  return (
    <React.Fragment>
      <TextField
        select
        label="City"
        helperText="List of City"
        onChange={(e) =>
          console.log(data.nx[e.target.value], data.ny[e.target.value])
        }
      >
        {data.city.map((city, index) => {
          return (
            <MenuItem key={city} value={index}>
              {city}
            </MenuItem>
          );
        })}
      </TextField>
    </React.Fragment>
  );
};

export default cityPciker;
