import React, { Component } from "react";
import { numbers } from "../api";

function showConfirm({i, numbers, city}) {
  return(
    <React.Fragment>
      {i} {numbers} {city}
    </React.Fragment>
  )
}

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
    let city = (this.props.city)
    console.log(city)
    return (
      <React.Fragment>
        <h1>확진자</h1>
        <p>{city.data}</p>
        {numberData.map((numbers, i) => (
          {city.data === i && (
            <p>{numbers}</p>
          )}
        ))}
      </React.Fragment>
    );
  }
}

export default number;
