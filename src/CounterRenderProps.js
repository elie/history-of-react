import React from "react"

class Wrapper extends React.Component {
  state = { count: 0 };

  increment = () => {
    return this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    return this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        {this.props.render({
          increment: this.increment,
          decrement: this.decrement,
          count: this.state.count
        })}
      </div>
    );
  }
}

class CounterRenderProps extends React.Component {
  render() {
    return (
      <Wrapper
        render={({ increment, decrement, count }) => (
          <div>
            <div>Current count: {count}</div>
            <div>
              <button onClick={() => decrement()}>-</button>
              <button onClick={() => increment()}>+</button>
            </div>
          </div>
        )}
      />
    );
  }
}

export default CounterRenderProps