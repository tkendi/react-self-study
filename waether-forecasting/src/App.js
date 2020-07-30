import React from "react";
import {RNHStatus} from './api'
import axios from 'axios'

class App extends React.Component {
  async componentDidMount () {
    const data = RNHStatus
    console.log(data)
  }

  render() {  
    return (
      <div>
        <header>App</header>
      </div>
    );
  }
}

export default App;
