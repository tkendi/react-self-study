import React from "react";
import {cjParsing} from './lib/index'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state({
      time: [],
      location: [],
      description: []
    })
  }

    async componentDidMount() {
      const data = await cjParsing();
      this.setState({
      time: data.time,
      location: data.location,
      description: data.description
    })
      console.log(this.state)
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
