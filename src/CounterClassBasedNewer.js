import React from "react";

class CounterClassBasedNewer extends React.Component {
  state = {
    count: 0
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <div>Current count: {this.state.count}</div>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default CounterClassBasedNewer;
