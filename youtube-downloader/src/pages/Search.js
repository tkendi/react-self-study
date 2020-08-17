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
import { useDispatch } from "react-redux";
import { findSearch } from "../modules/search";

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

const Search = ({ onSubmit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const onSubmit = () => {
  //   dispatch(findSearch(data));
  //   console.log(dispatch(findSearch(data)));
  // };
  const [data, setData] = useState('');

  const onChange = (text) => {
    setData(text);
    console.log(text);
  };


  return (
    <form onSubmit={onSubmit(data)}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search"
          inputProps={{ "airial-label": "Search" }}
          onChange = {(e) => onChange(e.target.value)}
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
};

export default Search;
