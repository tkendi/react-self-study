import React from "react";
import { Typography } from "@material-ui/core";
import {observer, PropTypes} from 'mobx-react'
import AppBar from "../../public/Appbar/SearchingAppbar";

class searchMain extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
      </div>
    );
  }
}

export default searchMain;
