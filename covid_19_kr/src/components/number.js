import React, { Component } from "react";
import { numbers } from "../api";

class number extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const numberData = await numbers();
    this.setState({
      data: numberData,
    });
    console.log(numberData);
  }
  render() {
    const numberData = this.state.data;
    let confirm_num = (this.props.numbers)
    return (
      <React.Fragment>
        <h1>hello</h1>
        <p>{confirm_num}</p>
        {numberData.map((numbers, i) => (
          <p key={i} value={numbers}>
            {numbers}
          </p>
        ))}
      </React.Fragment>
    );
  }
}

number.defaultProps = {
  numbers: 0,
};

export default number;
