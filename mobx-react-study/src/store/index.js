import CounterStore from "./counter";
import ResetStore from "./reset";

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.reset = new ResetStore(this);
  }
}

export default RootStore;
