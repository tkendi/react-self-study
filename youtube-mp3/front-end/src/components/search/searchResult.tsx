import React from "react";
import { Typography } from "@material-ui/core";
import { inject } from "mobx-react";

@inject("store")
class searchResult extends React.Component {
  render() {
    const { store }: any = this.props;
    console.log(store.searching);
    return (
      <div>
        <Typography>Testing</Typography>
      </div>
    );
  }
}

export default searchResult;
