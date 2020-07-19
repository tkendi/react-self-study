import React, { Component } from "react";
import { numbers } from "../api";

class number extends Component {
  state = {
    data: {},
    numbers: {},
  };
  async componentDidMount() {
    const numberData = await numbers();
    this.setState({
      numbers: numberData,
    });
  }
  render() {
    const numbersData = Array.from(this.state.numbers);
    console.log(numbersData)
    return (
      <React.Fragment>
        <h1>hello</h1>
        {numbersData.map((numbers, i) => (
          <>
            <p>{i}:{numbers}</p>
          </>
        ))}
      </React.Fragment>
    );
  }
}

export default number;
