import React from "react";
import { Typography } from "@material-ui/core";
import { inject } from "mobx-react";

@inject("store")
class searchResult extends React.Component {
  render() {
    const { store }: any = this.props;
    const searching_r  = store.searching
    console.log(searching_r)
    return (
      <div>
          {searching_r ? <Typography>Empty</Typography> : null}
      </div>
    );
  }
}

export default searchResult;
