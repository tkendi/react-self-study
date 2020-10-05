import React from "react";
import { Typography } from "@material-ui/core";
import { inject } from "mobx-react";

@inject("store")
class searchResult extends React.Component {
  render() {
    const { store }: any = this.props;
    const searching_r  = store.searching
    return (
      <div>
          {searching_r === null ? <Typography>Empty</Typography> : <Typography>{searching_r}</Typography>}
      </div>
    );
  }
}

export default searchResult;
