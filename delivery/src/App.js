import React from "react";
import CjDeliver from "./components/cjParsing";
import Input from "./components/numInput";

class App extends React.Component {
  state = {
    number: 0,
  };

  handleNumber = async (deliverNum) => {
    console.log(deliverNum);
    this.setState({
      number: deliverNum,
    });
  };

  render() {
    return (
      <div>
        <Input handleNumberChange={this.handleNumber} />
      </div>
    );
  }
}

export default App;
