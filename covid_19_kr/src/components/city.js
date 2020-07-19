import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

class city extends React.Component {
    state = {
        data: {}
    }
  render() {
      this.state.data = this.props
      const data = this.state
    return (
      <React.Fragment>
        <h1>Hello</h1>
        <FormControl>
          <NativeSelect>
            {data.map((data, i) => {
              <option key={i} value={data}>
                {data}
              </option>;
            })}
          </NativeSelect>
        </FormControl>
      </React.Fragment>
    );
  }
}

export default city;
