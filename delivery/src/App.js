import React from "react";
import {cjParsing} from './lib/index'

class App extends React.Component {
    async componentDidMount() {
      const data = await cjParsing();
      const time = data.time
      const location = data.location
      const description = data.description

      console.log(time, location, description)
    }
  render() {
    return (
      <div>
        <header>Hello</header>
      </div>
    );
  }
}

export default App;
