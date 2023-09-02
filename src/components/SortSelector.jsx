import React from 'react'
import MySelect from "./UI/select/MySelect"

function SortSelector({options, defaultOption, value, setSelect}) {

    return (
    <MySelect value={value} 
        onChange={(event)=>setSelect(event.target.value)}
        >
        <option value='' disabled >{defaultOption}</option>
        {options.map((o)=>{
            return <option key={o.value} value={o['value']}>{o['text']}</option>
        })}
    </MySelect>
  )
}

export default SortSelector