import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SideBar from './SideBar';
import '../styles/css/Appbar.scss'

const Appbar = () => {
  return (
    <div className="root">
      <SideBar />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className="title">
            Animals Life
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
