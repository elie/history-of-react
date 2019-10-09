import React from "react";

class LifeCycle extends React.Component {
  state = {
    count: 0
  }

  componentDidMount(){
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate(){
    document.title = `You clicked ${this.state.count} times`;
  }
  
  render(){
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState(
          {count: this.state.count + 1})
        }>
        Increment!
        </button>
      </div>
    );
  }
};

export default LifeCycle