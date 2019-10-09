import React from 'react';
import CounterHOC from "./CounterHOC";
import CounterHooks from "./CounterHooks"
import CounterMixin from "./CounterMixin"
import CounterRenderProps from "./CounterRenderProps"
import Effects from "./Effects"
import LifeCycle from "./LifeCycle"
import './App.css';

function App() {
  return (
    <div className="App">
     <CounterHOC/>
     <CounterHooks/>
     <CounterRenderProps/>
     <CounterMixin/>
     <Effects/>
     <LifeCycle/>
    </div>
  );
}

export default App;
