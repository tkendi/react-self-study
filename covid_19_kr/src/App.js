import React from "react";
import { cityPicker } from "./api";
import City from './components/city'

class App extends React.Component {
  state = {
    data: {}
  }
  async componentDidMount() {
    const cityData = await cityPicker();
    this.setState({
      data: cityData
    })

    console.log(this.state.data)
  }

  render() {
    const {data} = this.state
    return(
      <City data = {data} />
    )
  }
}

export default App;
