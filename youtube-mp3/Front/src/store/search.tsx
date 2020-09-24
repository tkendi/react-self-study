import React from "react";
import { Typography } from "@material-ui/core";
import { decorate, observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import * as searching from "../lib/api/searching";

class search extends React.Component {
  URL: any = "viva la vida";
  state = {
    data: null
  }

  async componentDidMount() {
    this.setState({
      data: await searching.search(this.URL)
    })
  }

  parsing = async () => {
    const data = this.state.data
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
