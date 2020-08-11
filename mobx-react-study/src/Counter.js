import React from "react";

class Counter extends React.Fragment {
  number = 0;

  increase = () => {
    this.number++;
  };

  decrease = () => {
    this.number--;
  };

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter; 
