import React from "react";
import { Typography } from "@material-ui/core";

const cityPciker = () => {

    const city = {
        city: ["Seoul", "Busan", "Daegu", "Incheon", "Gwangu", "Daejeon", "Ulsan", "Jeju"],
        nx: ["60", "98", "89", "55", "58", "67", "102", "52"], 
        ny: ["127", "76", "90", "124", "74", "100", "84", "38"]
    }

    return (
    <div>
      <Typography>CityPicker</Typography>
    </div>
  );
};

export default cityPciker;
