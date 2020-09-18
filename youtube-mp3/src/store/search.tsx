import React from "react";
import { Typography } from "@material-ui/core";
import { decorate, observable, action, computed } from "mobx";
import { observer } from "mobx-react";

class search extends React.Component {
  URL: any = "viva la vida";

  async componentDidMount() {
      
  }

  render() {
    return (
      <div>
        <Typography>searching Test</Typography>
      </div>
    );
  }
}

export default search;
