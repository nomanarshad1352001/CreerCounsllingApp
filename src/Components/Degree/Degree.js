import React from "react";
import Intro from "../Introduction/Intro.js";
import classes from './degree.module.css'
export default function Degree() {
  let InterDegrees = [
    {
      id: 0,
      name: "FSC(Pre-Engineering)",
      degType: "Intermediate",
      subName: "Faculty of Science in Pre Enginering.",
      description: "It is another option for science students after completing matriculation. It is the major and primary step toward the best engineering fields",
      img: './Material/engineering.jpg'
    },
    {
      id: 1,
      name: "FSC(Pre-Medical)",
      degType: "Intermediate",
      subName: "Faculty of Science in Pre Medical.",
      description: "It is another option for science students after completing matriculation. It the major and primary step toward the best engineering fields",
      img: 'Material/engineering.jpg'
    },
    {
      id: 2,
      name: "ICS(Physics)",
      degType: "Intermediate",
      subName: "Intermediate in computer sciences.",
      description: "It is another option for science students after completing matriculation. It the major and primary step toward the best engineering fields",
      img: 'Material/engineering.jpg'
    }
  ]
  let FilterDegrees = InterDegrees.map((clg, index) => {
    console.log(clg);
    return (
      <Intro key={clg.id} image={clg.img} Title={clg.name} subTitle={clg.subName} description={clg.description} />)
  })
  return (
    <div className={classes.container}>
      {
        FilterDegrees
      }

    </div>
  );
}
