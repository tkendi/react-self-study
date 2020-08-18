// import React, { useEffect, useState } from "react";
// import { findSearch, changeField } from "../../modules/search";
// import { useSelector, useDispatch } from "react-redux";
// import Search from "../../pages/Search";

// const SearchContainer = () => {

//   const dispatch = useDispatch();

//   const onSubmit = ({e, data}) => {
//     console.log(data)
//     dispatch(findSearch({ data }));
//     console.log(dispatch(findSearch({ data })));
//   };

//   // useEffect(() => {
//   //   dispatch(findSearch({ data }));
//   //   console.log(dispatch(findSearch({ data })));
//   // }, [dispatch, data]);

//   return (
//     <React.Fragment>
//       <Search onSubmit = {onSubmit} />
//     </React.Fragment>
//   );
// };

// export default SearchContainer;

import React from "react";
import { search } from "../../lib/api/search";
import Search from "../../pages/Search";

class SearchContainer extends React.Component {

  handleCheck = (data) => {
    console.log(data)
  }

  render() {
    return <Search onCheck = {this.handleCheck} />;
  }
}

export default SearchContainer;
