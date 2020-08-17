import React, { useEffect } from "react";
import { findSearch } from "../../modules/search";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";

const SearchContainer = ({ text }) => {
  const { data, error } = useSelector(({ search }) => ({
    data: search.data,
    error: search.error,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findSearch({ text }));
    console.log(dispatch(findSearch({ text })));
  }, [dispatch, text]);

  return (
    <React.Fragment>
      <Typography>Testing</Typography>
    </React.Fragment>
  );
};

export default SearchContainer;
