import React, { Component } from "react";
import { numbers } from "../api";
import Typography from "@material-ui/core";

class number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
  }

  async componentDidMount() {
    const confirm = await numbers(this.props.city);
    this.setState({
      data: confirm,
    });
    console.log(confirm);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.city !== this.props.city) {
      const confirm = await numbers(this.props.city);
      console.log(confirm);
      this.setState({
        data: confirm,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Typography>확진자</Typography>
        <Typography>{this.state.data}</Typography>
      </React.Fragment>
    );
  }
}

export default number;
