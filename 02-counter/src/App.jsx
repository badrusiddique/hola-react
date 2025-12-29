import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => counter > 0 && setCounter(counter - 1);

  return (
    <>
      <h2>02-counter</h2>
        <span>Counter: {counter}</span>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        &nbsp;
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
