import React from "react";
import {Typography} from '@material-ui/core'
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route component = {LoginPage} path = "/login" />
        <Route component = {RegisterPage} path = "/register" />
      </React.Fragment>
    );
  }
}

export default App;
