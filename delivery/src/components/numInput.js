import React from "react";
import { TextField } from "@material-ui/core";

const numInput = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField id="deliver-num" label="운송장 번호" />
    </form>
  );
};

export default numInput;
