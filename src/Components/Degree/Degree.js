import React, { useContext } from "react";
import DataContext from "../../Store/data-context.js";
import Intro from "../Introduction/Intro.js";
import UserDegrees from "../UserDegrees/UserDegrees.js";
import classes from "./degree.module.css";
export default function Degree() {
  const ctx = useContext(DataContext);
  return (
    <div className={classes.container}>
      {ctx.MatricDegrees.map((matric) => {
        return (
          <Intro
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
            key={inter.id}
            image={inter.img}
            Title={inter.name}
            subTitle={inter.subName}
            description={inter.description}
          />
        );
      })}
      <UserDegrees/>
    </div>
  );
}
