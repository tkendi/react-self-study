import React from "react";
import {
  InputBase,
  Divider,
  makeStyles,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import {findSearch} from '../modules/search'

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
    const classes = this.props;

    const dispatch = useDispatch()
    const onSubmit = (e) => {
      e.preventDefault()
      dispatch(findSearch(this.props.data))
    }

    return (
      <form onSubmit={this.props.onSubmit}>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "airial-label": "Search" }}
            onChange={(e) => this.props.onChange(e.target.value)}
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
