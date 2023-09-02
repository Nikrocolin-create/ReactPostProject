import React from "react";
import classes from "./MySelect.module.css";

function MySelect (props) {
    return (
        <select className={classes.MySelect} {...props}></select>
    );
}
export default MySelect