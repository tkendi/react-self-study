import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "mobx-react";
import CounterStore from "./store/counter";

const counter = new CounterStore();

ReactDOM.render(
  <Provider counter={counter}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
