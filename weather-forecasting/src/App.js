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

  async componentDidUpdate() {
    const nx = 127;
    const ny = 37;
    const weather = await weatherData(nx, ny);
    this.setState({
      date: weather.baseDate,
      time: weather.baseTime,
    });

    console.log(this.state)
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
