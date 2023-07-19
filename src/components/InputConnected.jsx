import React, {useState} from 'react'

function InputConnected() {
    const [inputValue, setInputValue] = useState("default");
  return (
    <>
        <h3>{inputValue}</h3>
        <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} />
    </>
  )
}

export default InputConnected