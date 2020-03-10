import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import City from './components/City';
import Corona from './components/Corona';
import { Link, Route } from 'react-router-dom';

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