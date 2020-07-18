import React from "react";
import { fetchData } from "./api";

class App extends React.Component {
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData)
  }

  render() {
    return <h1>testing</h1>;
  }
}

export default App;
