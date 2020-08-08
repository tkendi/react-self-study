import React from "react";
import { Typography } from "@material-ui/core";
import { Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
      </React.Fragment>
    );
  }
}

export default App;
