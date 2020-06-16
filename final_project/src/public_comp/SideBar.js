import React, { Component } from 'react';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/css/SideBar.scss';
import { Typography } from '@material-ui/core';
import "fontsource-roboto"

class SideBar extends Component {
  render() {
    return (
      <Menu width={225}>
        <NavLink className="menu-item" to="/">
          <Typography variant = 'body2'>Home</Typography>
        </NavLink>

        <NavLink className="menu-item" to="/City">
          <Typography variant = 'body2'>Home</Typography>
        </NavLink>

        <NavLink className="menu-item" to="/Domestic">
          <Typography variant = 'body2'>Home</Typography>
        </NavLink>

        <NavLink className="menu-item" to="/test_map">
          <Typography variant = 'body2'>Home</Typography>
        </NavLink>
      </Menu>
    );
  }
}

export default SideBar;
