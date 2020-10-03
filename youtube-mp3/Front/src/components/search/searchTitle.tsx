import React from "react";
import { observer, inject } from "mobx-react";
import { Grid, TextField, Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
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

    console.log(this.state.y_title);
  };

  render() {
    const { appChange }: any = this;
    const { store }: any = this.props;
    const searching_result = this.state.y_title
    return (
      <div>
        <Grid>
          <TextField
            id="search-title"
            label="Searching Music"
            onChange={appChange}
          />
          <button style = {{color: "none"}} onClick={this.props.handleTitleChange(searching_result)}>
            <SearchIcon  style = {{paddingTop: 13, paddingRight: 20}} />
          </button>
        </Grid>
      </div>
    );
  }
}

export default searchTitle;
