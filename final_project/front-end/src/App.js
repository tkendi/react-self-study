import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import InfoPage from "./components/pages/InfoPage";
import WritePage from "./components/pages/WritePage";
import PostPage from "./components/pages/PostPage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route component={InfoPage} path="/" exact={true} />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={WritePage} path="/write" />
        <Route component={PostPage} path="/@:username/:postId" />
      </React.Fragment>
    );
  }
}

export default App;
