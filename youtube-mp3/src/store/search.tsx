import React from "react";
import { Typography } from "@material-ui/core";
import { decorate, observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import * as searching from "../lib/api/searching";

class search extends React.Component {
  URL: any = "viva la vida";
  data: any = null;

  async componentDidMount() {
    this.data = await searching.search(URL);
  }

  parsing = async () => {
    console.log(this.data);
  };

  render() {
    return (
      <div>
        <Typography>searching Test</Typography>
        <button onClick={this.parsing}>Click</button>
      </div>
    );
  }
}

decorate(search, {
  URL: observable,
  parsing: action,
});

export default observer(search);
