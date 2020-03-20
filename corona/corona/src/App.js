import React, { Component } from 'react';
import logo from './logo.svg';
import './public/css/App.css';
import City from './components/City';
import Domestic from './components/Domestic';
import { NavLink, Route } from 'react-router-dom';
import Index_AppBar from './public/Index_AppBar';
import Home from './components/Home';
import Index_SideBar from './public/Index_SideBar';

class App extends Component {
  render() {
    return (
      <>
        <Index_AppBar />
        <current_situation_char />
        <Route path="/" component={Home} exact={true} />
        <Route path="/City" component={City} />
        <Route path="/Domestic" component={Domestic} />
      </>
    );
  }
}

export default App;
