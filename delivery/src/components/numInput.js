import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import styles from "../styles/numInput.module.css";

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
      <div className={styles.form}>
        <Grid container direction="row" justify="center" alignItems="center">
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
