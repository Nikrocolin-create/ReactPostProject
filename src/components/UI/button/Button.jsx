import React from 'react';
import classes from './Button.module.css';
function Button({children, ...props}) {

  return (
    <div className={classes.myBtn} {...props}>{children}</div>
  )
}

export default Button