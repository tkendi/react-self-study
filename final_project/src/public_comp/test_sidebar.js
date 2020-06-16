import React, { Component } from 'react';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/css/test_sidebar.scss'

class Index_AppBar extends Component {
  render() {
    return (
      <Menu>
          <NavLink className="menu-item" to="/">
            Home
          </NavLink>

          <NavLink className="menu-item"  to="/City">
            Status City
          </NavLink>

          <NavLink className="menu-item" to="/Domestic"> 
            Status Domestic
          </NavLink>

          <NavLink className="menu-item" to="/test_map"> 
            testing map
          </NavLink>
      </Menu>
    );
  }
}

export default Index_AppBar;
