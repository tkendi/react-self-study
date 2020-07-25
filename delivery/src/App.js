import React from "react";
import CjDeliver from './components/cjParsing'
import Input from './components/numInput'

class App extends React.Component {
  render() {
    return (
      <div>
        <Input />
        <CjDeliver />
      </div>
    )
  }
}

export default App;
