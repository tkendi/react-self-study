import React from "react";
import data from './data/data.json'

class App extends React.Component {
  render() {  
    return (
      <div>
        <header>App</header>
        {data.RN1}
      </div>
    );
  }
}

export default App;
