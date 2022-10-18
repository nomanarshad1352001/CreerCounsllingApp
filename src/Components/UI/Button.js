import React from 'react'
import classes from './Button.module.css'
export default function Button(props) {
    return (
        <div   >
            <button className={classes.btn} onClick={props.onClickFunc}>{props.btnTitle}</button>
            </div >
  )
}
