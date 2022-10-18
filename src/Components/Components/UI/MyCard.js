import React from 'react'
import './Card.css';
export default function MyCard(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}
