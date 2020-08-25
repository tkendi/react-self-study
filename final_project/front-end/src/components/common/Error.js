import React from "react";
import { makeStyles, Alert } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error = ({ props }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="error">{props.error}</Alert>
    </div>
  );
};

export default Error;
