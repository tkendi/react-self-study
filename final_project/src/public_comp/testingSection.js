import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/css/SideBar.scss';
import { Typography } from '@material-ui/core';

class SideBar extends Component {
  render() {
    return (
      <Menu width={225}>
        <NavLink className="menu-item" to="/">
          <Typography variant = 'body2'>Home</Typography>
        </NavLink>

        <NavLink className="menu-item" to="/NoticeBoard">
          <Typography variant = 'body2'>Home</Typography>
        </NavLink>

        <NavLink className="menu-item" to="/Streaming">
          <Typography variant = 'body2'>Home</Typography>
        </NavLink>

        <NavLink className="menu-item" to="/login">
          <Typography variant = 'body2'>Home</Typography>
        </NavLink>
      </Menu>
    );
  }
}

export default SideBar;
