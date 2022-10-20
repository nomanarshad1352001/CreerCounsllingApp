import React, { useContext } from "react";
import DataContext from "../../Store/data-context.js";
import Intro from "../Introduction/Intro.js";
import classes from "./degree.module.css";
export default function Degree() {
  const ctx = useContext(DataContext);
  return (
    <div className={classes.container}>
      {ctx.MatricDegrees.map((matric) => {
        return (
          <Intro
          btnTitle="See More"
            key={matric.id}
            image={matric.img}
            Title={matric.name}
            subTitle={matric.subName}
            description={matric.description}
          />
        );
      })}
      <div>Inter Degrees</div>
      {ctx.InterDegrees.map((inter) => {
        return (
          <Intro
          btnTitle="See More"
            key={inter.id}
            image={inter.img}
            Title={inter.name}
            subTitle={inter.subName}
            description={inter.description}
          />
        );
      })}
    </div>
  );
}
