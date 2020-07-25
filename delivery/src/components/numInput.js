import React from "react";
import { TextField, Button } from "@material-ui/core";
import cjParsing from "./cjParsing";

class numInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  appChange = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  render() {
    const { appChange, appClick } = this;
    return (
      <form noValidate autoComplete="off">
        <TextField id="deliver-num" label="운송장 번호" onChange={appChange} />
        <Button color="primary" onClick = {this.props.handleNumberChange(this.state.number)}>
          조회
        </Button>
      </form>
    );
  }
}

export default numInput;
