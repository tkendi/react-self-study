import React from "react";
import { observer, inject } from "mobx-react";
import { Grid, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

interface TextProps {
  handleTitleChange: any;
}

interface TextState { 
  y_title: any;
}

@inject("store")
@observer
class searchTitle extends React.Component<TextProps, TextState> {
  state = {
    y_title: "",
  };

  appChange = (e: any) => {
    this.setState({
      y_title: e.target.value,
    });
  };

  render() {
    const { store }: any = this.props;
    return (
      <div>
        <Grid>
          <TextField
            id="search-title"
            label="Searching Music"
            onChange = {this.appChange}
          />
          <Button onClick={(e: any) => store.find(this.state.y_title)}>
            <SearchIcon  style = {{paddingTop: 13, paddingRight: 20}} />
          </Button>
        </Grid>
      </div>
    );
  }
}

export default searchTitle;
