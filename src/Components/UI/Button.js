import React from 'react'
import classes from './Button.module.css'
export default function Button(props) {
    return (
        <div   >
            <button style={{background:props.color}} className={classes.btn} onClick={props.onClickFunc}>
                
                {!props.btnIcon ? "" : props.btnIcon}
                { props.btnTitle }
                
                </button>
            </div >
  )
}
