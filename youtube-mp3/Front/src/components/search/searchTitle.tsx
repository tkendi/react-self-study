import React from "react";
import { Typography } from "@material-ui/core";
import {observer, inject} from 'mobx-react'
import {Grid, TextField, Button} from '@material-ui/core'


class searchTitle extends React.Component {
  state = {
    y_title: ""
  }

  appChange = (e: any) => {
    this.setState({
      y_title: e.target.value
    });

    console.log(this.state.y_title)
  }

  render() {
    const {appChange}: any = this
    return (
      <div>
        <Grid>
          <TextField id = "search-title" label = "youtube title" />
          <Button color = "inherit">Search</Button>
        </Grid>
      </div>
    );
  }
}

export default searchTitle;
