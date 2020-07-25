import React from "react";
import CjDeliver from "./components/cjParsing";
import Input from "./components/numInput";
import styles from "./styles/App.module.css";

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
      <React.Fragment>
        <div className={styles.form}>
          <Input handleNumberChange={this.handleNumber} />
        </div>
        <div>
          <CjDeliver number={this.state.number} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
