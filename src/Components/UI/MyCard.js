import React from 'react'
import clasess from './Card.module.css'
export default function MyCard(props) {
  return (
    <div className={clasess.card }>
      {props.children}
    </div>
  )
}
