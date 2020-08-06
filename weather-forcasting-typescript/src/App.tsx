import React from "react";
import {weatherData} from './api'

class App extends React.Component {
  
  async componentDidMount() {
    const nx = 60;
    const ny = 127;
    const data = await weatherData(nx, ny)
    console.log(data)
  }
  render() {
    return (
      <div>
        <p>Hello Typescript</p>
      </div>
    );
  }
}

export default App;
