// As the first React problem, you are asked to create the famous Counter app.

// counter starts from 0.
// click the '+' button to increment.
// click the '-' button to decrement.


import React, {useState} from 'react'

export function App() {
  
  const [number, setNumber] = useState(0);
  const handleClick = (x: number) => {
    setNumber(prevNumber => prevNumber+x);
  }

  return (
    <div>
      <button data-testid="decrement-button" onClick={() => handleClick(-1)}>-</button>
      <button data-testid="increment-button" onClick={() => handleClick(1)}>+</button>
      <p>clicked: {number}</p>
    </div>
  )
}

// run your code by clicking the run button on the right








