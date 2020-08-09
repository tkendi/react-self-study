import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import MainPage from "./components/pages/MainPage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route component={MainPage} path="/" />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
      </React.Fragment>
    );
  }
}

export default App;
