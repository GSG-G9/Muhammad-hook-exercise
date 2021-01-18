import React, {useState} from 'react'
import './index.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(0);
  }

  return (
    <div className="Counter">
      <p className="show">{counter}</p>
      <div className="Counter-btns">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
