import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Corona from './components/Corona';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Corona />
        <City />
      </div>
    );
  }
}

export default App;
