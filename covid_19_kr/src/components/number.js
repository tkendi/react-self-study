import React, { Component } from "react";
import { numbers } from "../api";
import {Typography} from "@material-ui/core";

class number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
  }

  async componentDidMount() {
    const confirm = await numbers(this.props.city);
    if(!confirm) {
      return "Loading...."
    }
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
      <div className>
        <Typography className = "titleText">확진자</Typography>
        <Typography color = "primary" variant = "body2" component = "h3" align = "left" noWrap>{this.state.data}</Typography>
      </div>
    );
  }
}

export default number;
