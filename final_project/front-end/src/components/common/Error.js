import React from "react";
import { makeStyles } from "@material-ui/core";
import {Alert, AlertTitle} from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '3rem',
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        로그인이 되어있지 않습니다. - <strong>check it out!</strong>
      </Alert>
    </div>
  );
};

export default Error;
