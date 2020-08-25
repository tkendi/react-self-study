import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { withRouter } from "react-router-dom";
import Warning from '../../img/FBIwarning.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: Warning,
    marginTop: "3rem",
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Error = ({ history }) => {
  const [count, setCount] = useState(0);

  const classes = useStyles();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     history.push("/");
  //     setCount(timer);
  //   }, 3000);
  // }, []);

  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        로그인이 되어있지 않습니다. - <strong>check it out! {count}</strong>
      </Alert>
    </div>
  );
};

export default withRouter(Error);
