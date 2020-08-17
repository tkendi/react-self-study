import React, { useEffect, useState } from "react";
import { findSearch, changeField } from "../../modules/search";
import { useSelector, useDispatch } from "react-redux";
import Search from "../../pages/Search";

const SearchContainer = () => {
  const [data, setData] = useState('')

  const onChange = (text) => {
    setData(text)
    console.log(text)
  };

  const dispatch = useDispatch();

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(findSearch({data}))
  //   console.log(dispatch(findSearch({data})))
  // };

  // useEffect(() => {
  //   dispatch(findSearch({ text }));
  //   console.log(dispatch(findSearch({ text })));
  // }, [dispatch, text]);

  return (
    <React.Fragment>
      <Search onChange={onChange} data={data} />
    </React.Fragment>
  );
};

export default SearchContainer;
