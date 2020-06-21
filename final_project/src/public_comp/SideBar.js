import React, { Component } from 'react';
import { NavLink, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../styles/css/SideBar.scss';
import { Typography } from '@material-ui/core';

class SideBar extends Component {
  render() {
    return (
      <Menu width={225}>
        <Link className="menu-item" to="/main">
          <Typography variant = 'body2'>Home</Typography>
        </Link>

        <Link className="menu-item" to="/NoticeBoard">
          <Typography variant = 'body2'>Home</Typography>
        </Link>

        <Link className="menu-item" to="/Streaming">
          <Typography variant = 'body2'>Home</Typography>
        </Link>

        <Link className="menu-item" to="/login">
          <Typography variant = 'body2'>Home</Typography>
        </Link>
      </Menu>
    );
  }
}

export default SideBar;
