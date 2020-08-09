import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import MainPage from "./components/pages/MainPage";
import WritePage from "./components/pages/WritePage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route component={MainPage} path="/" exact={true} />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={WritePage} path="/write" />
      </React.Fragment>
    );
  }
}

export default App;
