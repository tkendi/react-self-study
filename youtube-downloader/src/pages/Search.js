import React, { useEffect, useState } from "react";
import {
  InputBase,
  Divider,
  makeStyles,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {search} from '../lib/api/search'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

class Search extends React.Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    console.log(this.state.text)
    const data = await search()
    console.log(data)
  }

  render() {
    const classes = this.props;
    return (
      <form onSubmit = {this.handleSubmit}>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "airial-label": "Search" }}
            onChange = {this.handleChange}
          />
          <IconButton
            color="primary"
            className={classes.iconButton}
            arial-label="Search"
          >
            <button>
              <SearchIcon />
            </button>
          </IconButton>
        </Paper>
      </form>
    );
  }
}

export default Search;
