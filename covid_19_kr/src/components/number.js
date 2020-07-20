import React, { Component } from "react";
import { numbers } from "../api";

class number extends Component {
  state = {
    data: 0,
    numbers: [],
  };
  async componentDidMount() {
    const numberData = await numbers();
    this.setState({
      numbers: numberData,
    });
    console.log(numberData);
  }
  render() {
    const numbersData = this.state.numbers;
    const number = this.props.;
    this.setState({
      data: number
    })
    return (
      <React.Fragment>
        <h1>hello</h1>
      </React.Fragment>
    );
  }
}

export default number;
