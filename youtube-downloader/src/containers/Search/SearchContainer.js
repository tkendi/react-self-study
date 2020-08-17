import React, { useEffect } from "react";
import { findSearch } from "../../modules/search";
import { useSelector, useDispatch } from "react-redux";
import Search from '../../pages/Search'

const SearchContainer = ({ text }) => {

  const onChange = (e) => {
    const {data} = e.target
  }
  
  const { data, error } = useSelector(({ search }) => ({
    data: search.data,
    error: search.error,
  }));

  console.log({data, error})

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findSearch({ text }));
    console.log(dispatch(findSearch({ text })));
  }, [dispatch, text]);

  return (
    <React.Fragment>
      <Search />
    </React.Fragment>
  );
};

export default SearchContainer;
