import React from "react";
import Intro from "../Introduction/Intro.js";
import classes from './degree.module.css'
import engImg from '../Material/engineering.jpg'
export default function Degree() {
  let InterDegrees=[
    {
       name:"FSC(Pre-Engineering)",
       degType:"Intermediate",
       subName:"Faculty of Science in Pre Enginering.",
       description:"It is another option for science students after completing matriculation. It is the major and primary step toward the best engineering fields",
     img:'Components\Material\engineering.jpg'
     }
       ]
  return (
    <div className={classes.container}>
      <div className={classes.item1}>
        <Intro image={engImg} Title={InterDegrees[0].name} subTitle={InterDegrees[0].subName}description={InterDegrees[0].description}/>
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
