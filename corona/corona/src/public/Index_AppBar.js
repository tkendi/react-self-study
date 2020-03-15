import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import Clock from 'react-live-clock';
import './css/Index_AppBar.css';
import Index_SideBar from '../public/Index_SideBar';

class Index_AppBar extends Component {
  render() {
    return (
      <div className="root">
        <Index_SideBar />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" className="title">
              Corona
              <Clock
                format={'HH:mm'}
                ticking={true}
                timezone={'Asia/Seoul'}
                className="time_zone"
              />
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Index_AppBar;
