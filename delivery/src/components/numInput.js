import React from "react";
import { TextField, Button, Grid, StylesProvider } from "@material-ui/core";

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
    const { appChange } = this;
    return (
      <div>
        <Grid container direction = "row" justify = "center" alignItems = "center">
          <TextField
            id="deliver-num"
            label="운송장 번호"
            onChange={appChange}
          />
          <Button
            color="primary"
            noWrap
            onClick={() => this.props.handleNumberChange(this.state.number)}
          >
            조회
          </Button>
        </Grid>
      </div>
    );
  }
}

export default numInput;
