import React from 'react';
import {CssBaseline, Container } from '@material-ui/core'
import Appbar from '../public_comp/Appbar'

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar />
        
      </React.Fragment>
    );
  }
}

export default Main;
