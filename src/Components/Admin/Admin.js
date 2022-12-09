import React from 'react'
import classes from './Admin.module.css';
import Form1 from '../Forms/collegeForm'
// import Form2 from '../Forms/degreeForm'
export default function Admin() {
  return (
    <div className={classes.main}>
      <Form1 />
      {/* <Form2 /> */}
    </div>
  )
}
