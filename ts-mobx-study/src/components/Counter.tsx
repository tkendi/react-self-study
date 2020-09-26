import React from "react";
import { inject, observer } from "mobx-react";

@inject('counter')
@observer
class Counter extends React.Component {
  render() {
      const {counter}: any = this.props
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
