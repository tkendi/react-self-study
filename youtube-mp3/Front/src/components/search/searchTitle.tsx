import React from "react";
import { Typography } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import { Grid, TextField, Button } from "@material-ui/core";

interface TextProps {
  handleTitleChange: any;
}

interface TextState {
  y_title: any;
}

@inject('store')
@observer
class searchTitle extends React.Component<TextProps, TextState> {
  state = {
    y_title: "",
  };

  appChange = (e: any) => {
    this.setState({
      y_title: e.target.value,
    });

    console.log(this.state.y_title);
  };

  render() {
    const { appChange }: any = this;
    const {store}: any = this.props
    return (
      <div>
        <Grid>
          <TextField
            id="search-title"
            label="youtube title"
            onChange={appChange}
          />
          <Button
            color="inherit"
            onClick={store.find(this.state.y_title)}
          >
            Search
          </Button>
        </Grid>
      </div>
    );
  }
}

export default searchTitle;
