import React from "react";
import { fetchData } from "./api";

class App extends React.Component {
  async componentDidMount() {
    const fetchedData = await fetchData();
    
  }

  render() {
    return <h1>testing</h1>;
  }
}

export default App;
