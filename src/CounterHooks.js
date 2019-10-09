import React, { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return [count, onIncrease, onDecrease];
};

const CounterHooks = () => {
  const [count, onIncrease, onDecrease] = useCounter();

  return (
    <div>
      <div>Current count: {count}</div>
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default CounterHooks;
