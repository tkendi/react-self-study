import React from "react";
import { observer, inject } from "mobx-react";

@inject((stores) => ({
  counter: stores.counter,
  reset: stores.reset,
}))

@observer
class Counter extends React.Component {
  render() {
    const { counter, reset } = this.props;
    return (
      <div>
        <h1>제곱된 값{counter.total}</h1>
        <h1>현재 값 {counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
        <button onClick = {reset.resetFunc}>reset</button>
      </div>
    );
  }
}

export default Counter;
