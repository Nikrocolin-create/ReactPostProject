import React from 'react'
import MyInput from "./UI/input/MyInput"
import SortSelector from "./SortSelector";

function PostFilter({filter, setFilter, optionsToFilter}) {
  return (
    <div>    
    <MyInput
        value={filter.query}
        onChange={e=>setFilter({...filter, query:e.target.value})}
        placeholder="Type something">
    </MyInput>
    <SortSelector options={optionsToFilter} defaultOption='Choose sort type' value={filter.sort} 
        setSelect={(selectedSort)=>{setFilter({...filter,sort:selectedSort})}}>
    </SortSelector>
 </div>
  )
}

export default PostFilter