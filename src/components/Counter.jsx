import React, {useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    const decrement = ()=>{
        setCounter(counter-1)
    }
    const increment = ()=>{
        setCounter(counter+1)
    }

  return (
    <>
    <h1>{counter}</h1>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    </>
  )
}

export default Counter