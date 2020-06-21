import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SideBar from './SideBar';
import { Button } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import '../styles/css/Appbar.scss';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      Appbar_color: '#5a5a5a',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const Appbar = ({ history }) => {
  return (
    <div className="root">
      <SideBar />
      <AppBar position="static" color="primary.Appbar_color">
        <Toolbar>
          <Typography variant="h4" className="title">
            Animals Life
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Appbar;
