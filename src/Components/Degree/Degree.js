import React from "react";
import Intro from "../Introduction/Intro.js";
import classes from './degree.module.css'
export default function Degree() {
  return (
    <div className={classes.container}>
      <div className={classes.item1}>
        <Intro />
      </div>
      <div className={classes.item2}>
        <Intro />
      </div>
      <div className={classes.item3}>
        <Intro />
      </div>
      <div className={classes.item4}>
        <Intro />
      </div>
      <div className={classes.item5}>
        <Intro />
      </div>
    </div>
  );
}
