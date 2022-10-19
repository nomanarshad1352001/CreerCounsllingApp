import React, { useContext } from "react";
import DataContext from "../../Store/data-context";
import Intro from "../Introduction/Intro.js";
import classes from "../Degree/degree.module.css";
export default function UserDegrees() {
  const ctx = useContext(DataContext);
  const FilteredDegree = ctx.MatricDegrees.map((matric, index) => {
    if (ctx.UserData.PassedDegree =="Matric Science(com)" ) {
      return 

    }
  });
  return (
    <React.Fragment>
      <div>Filtered degrees</div>
      <div className={classes.container}>
        <div>Inter Degrees</div>
        {/* {ctx.InterDegrees.map((inter) => {
        return (
          <Intro
            key={inter.id}
            image={inter.img}
            Title={inter.name}
            subTitle={inter.subName}
            description={inter.description}
          />
        );
      })} */}
        {/* <Intro
            key={matric.id}
            image={matric.img}
            Title={matric.name}
            subTitle={matric.subName}
            description={matric.description}
          /> */}
      </div>
    </React.Fragment>
  );
}
