import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './css/Index_SideBar.css';
import City from '../components/City'

class Index_AppBar extends Component {
  render() {
    return (
      <Menu>
          <a className="menu-item" href = "../components/City.js">
            Home
          </a>

          <a className="menu-item" href="/">
            Laravel
          </a>

          <a className="menu-item" href="/">
            Angular
          </a>
      </Menu>
    );
  }
}

export default Index_AppBar;
