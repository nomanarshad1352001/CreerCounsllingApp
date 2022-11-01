import React from 'react'
import classes from './Jobs.module.css';
// import { useLocation } from "react-router-dom";
export default function Jobs() {
  // const Location = useLocation();
  // console.log(Location.state.selected_Jobs.name);
  return (
    <div className={classes.container}>
      Jobs
      {/* <h2>Available Jobs for {Location.state.selected_Jobs.name}</h2>
      <p>{Location.state.selected_Jobs.description}</p> */}
      {/* {Location.state.selected_Jobs} */}
    </div>
  )
}
