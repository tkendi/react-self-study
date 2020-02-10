import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to = "/">홈</Link>
        </li>
        <li>
          <Link to = "/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path = "/" component = {Home} exact = {true} />
      <Route path = "/about" component = {About} />
    </div>
  );
};

export default App;
