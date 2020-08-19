import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import { Helmet } from "react-helmet-async";
import WritePage from "./components/pages/WritePage";
import PostPage from "./components/pages/PostPage";
import PostListPage from "./components/pages/PostListPage";
import MainPage from "./components/pages/MainPage";
import styles from "./styles/App.module.css";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;

  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(70, 70, 100, 0.3) 10%,
    rgba(250, 250, 250, 0.6) 70%,
    rgba(80, 90, 75, 0.6)
  );
  background-size: cover;
  font-family: sans-serif;
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Route component={MainPage} path="/" exact={true} />
          <Route
            component={PostListPage}
            path={["/@:username", "/postList"]}
            exact={true}
          />
          {/* <Route component={InfoPage} path="/" exact={true} /> */}
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" />
          <Route component={WritePage} path="/write" />
          <Route component={PostPage} path="/@:username/:postId" />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
