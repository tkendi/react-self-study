import React, { Component } from "react";
import { numbers, dateCreate } from "../api";
import { Typography, Grid, CardContent, Card } from "@material-ui/core";
import cx from "classnames";

import styles from "../styles/number.module.css";

class number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
      date: "",
    };
  }

  async componentDidMount() {
    const confirm = await numbers(this.props.city);
    const createDt = await dateCreate(this.props.city);
    if (!confirm) {
      return "Loading....";
    }
    this.setState({
      data: confirm,
      date: createDt,
    });
    console.log(confirm, createDt);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.city !== this.props.city) {
      const confirm = await numbers(this.props.city);
      this.setState({
        data: confirm,
      });
    }
    if (prevProps.date !== this.props.date) {
      const createDt = await dateCreate(this.props.city);
      this.setState({
        date: createDt,
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={"auto"}
            md={"auto"}
            className={cx(styles.card, styles.confirm)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                전일대비 증가 수
              </Typography>
              <Typography>{this.state.data}</Typography>
              <Typography color="textSecondary">{this.state.date}</Typography>
              <Typography variant="body2">
                Number of increasing patients
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default number;
