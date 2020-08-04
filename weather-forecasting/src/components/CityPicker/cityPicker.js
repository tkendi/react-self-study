import React from "react";
import {
  TextField,
  MenuItem,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import styles from "./cityPicker.module.css";

const useStyles = makeStyles({
  text: {
    color: "white",
  },
});

const cityPciker = ({ cityParsing }) => {
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
  //const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={styles.pickerForm}>
        <TextField
          color="secondary"
          select
          label="City"
          helperText="List of City"
          onChange={(e) =>
            cityParsing(data.nx[e.target.value], data.ny[e.target.value])
          }
          className={styles.picker}
        >
          {data.city.map((city, index) => {
            return (
              <MenuItem key={city} value={index} 
          >
                {city}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
    </React.Fragment>
  );
};

export default cityPciker;
