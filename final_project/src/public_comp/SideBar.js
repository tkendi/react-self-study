import React, { Component } from 'react';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/css/test_sidebar.scss';
import { Typography } from '@material-ui/core';

class test_sidebar extends Component {
  render() {
    return (
      <Menu width={250}>
        <NavLink className="menu-item" to="/">
          <Typography>Home</Typography>
        </NavLink>

        <NavLink className="menu-item" to="/City">
          <Typography>Home</Typography>
        </NavLink>

        <NavLink className="menu-item" to="/Domestic">
          <Typography>Home</Typography>
        </NavLink>

        <NavLink className="menu-item" to="/test_map">
          <Typography>Home</Typography>
        </NavLink>
      </Menu>
    );
  }
}

export default test_sidebar;
