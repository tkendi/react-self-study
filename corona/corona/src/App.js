import React, { Component } from 'react';
import logo from './logo.svg';
import './public/css/App.css';
import City from './components/City';
import Domestic from './components/Domestic';
import { NavLink, Route } from 'react-router-dom';
import Index_Button from './public/Index_Button';
import Index_SideBar from './public/Index_SideBar';
import Index_AppBar from './public/Index_AppBar';
import current_situation_char from './public/current_situation_chart'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Index_AppBar />
          <Index_SideBar className="Index_AppBar" />
          <div id="page-wrap">
            <h2>실시간 코로나 현황 보고</h2>
          </div>
          <current_situation_char />
          
          <NavLink to="/nCov">City</NavLink>
          <Route path = "/nCov" component = {City} />
        </div>
    );
  }
} 

export default App;
