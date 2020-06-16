import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SideBar from './SideBar';
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import '../styles/css/Appbar.scss'

function login_click(){
  <Link to = "/login" />
}

const Appbar = () => {
  return (
    <div className="root">
      <SideBar />
      <AppBar position="static" color = "secondary">
        <Toolbar>
          <Typography variant="h4" className="title">
            Animals Life
          </Typography>
          <Button color = "inherit" onClick={login_click}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
