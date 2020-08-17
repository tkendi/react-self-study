import React from "react";
import {
  InputBase,
  Divider,
  makeStyles,
  Paper,
  IconButton,
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'

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
  render() {
    const classes = this.props
    return (
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search"
          inputProps={{ "airial-label": "Search" }}
        />
        <IconButton
          color="primary"
          className={classes.iconButton}
          arial-label="Search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

export default Search;
