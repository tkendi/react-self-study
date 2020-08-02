import React from "react";
import { weatherData } from "./api";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const weather = weatherData();
    this.setState({
      data: weather,
    });
  }

  render() {
    const data = this.state.data
    console.log(data)
    return (
      <div>
        {Array.from(data).map((data, index) => (
          <p>
            {index}: {data}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
