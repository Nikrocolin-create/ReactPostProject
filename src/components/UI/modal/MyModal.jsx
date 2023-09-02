import React from 'react'
import cl from "./MyModal.module.css"
function MyModal({children, active, setActive}) {
  let rootClasses = cl.myModal
  if (active) {
    rootClasses += " "+cl.active
  }
  return (
    <div className={rootClasses} onClick={()=>{setActive(false)}}>
        <div className={cl.myModalContent} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default MyModal