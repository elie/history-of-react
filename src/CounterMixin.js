import React from "react";
import createReactClass from "create-react-class";

const CountMixin = {
  getInitialState() {
    return {
      count: 0
    };
  },
  increment: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  decrement: function() {
    this.setState({
      count: this.state.count - 1
    });
  }
};

const CounterMixin = createReactClass({
  mixins: [CountMixin],
  render: function() {
    return (
      <div>
        <div>Current count: {this.state.count}</div>
        <div>
          <button onClick={() => this.decrement()}>-</button>
          <button onClick={() => this.increment()}>+</button>
        </div>
      </div>
    );
  }
});

export default CounterMixin;
