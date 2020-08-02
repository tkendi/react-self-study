import React from "react";
import { weatherData } from "./api";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      time: "",
    };
  }

  async componentDidMount() {
    const weather = await weatherData();
    this.setState({
      date: weather.baseDate,
      time: weather.baseTime,
    });

    console.log(this.state)
  }

  render() {
    return (
      <div>
        <p>{this.state.date}</p>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default App;
