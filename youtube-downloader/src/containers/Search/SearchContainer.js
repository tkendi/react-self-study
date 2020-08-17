import React from "react";
import { searching } from "../../modules/search";
import { useSelector, useDispatch } from "react-redux";

const SearchContainer = ({ text }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searching({ text }));
  });
  return <React.Fragment>Testing</React.Fragment>;
};

export default SearchContainer;
