import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "mobx-react";
import youtube from "./store";

const store = new youtube();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
