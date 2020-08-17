import React, { useEffect } from "react";
import { searching } from "../../modules/search";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";

const SearchContainer = ({ text }) => {
  console.log({ text });
  const { data, error } = useSelector(({ search }) => ({
    data: search.data,
    error: search.error,
  }));

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(searching({ text }));
    console.log(dispatch(searching({ text })));
  }, [text, dispatch]);

  return (
    <React.Fragment>
      <Typography>Testing</Typography>
    </React.Fragment>
  );
};

export default SearchContainer;
