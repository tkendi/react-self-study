import React from "react";
import {cjParsing} from './lib/index'

class App extends React.Component {
    async componentDidMount() {
      const data = await cjParsing();
      console.log(data)
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
