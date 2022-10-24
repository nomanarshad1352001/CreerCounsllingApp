import React, { useContext } from "react";
import DataContext from "../../Store/data-context.js";
import Intro from "../Introduction/Intro.js";
import classes from "./degree.module.css";
import { useNavigate } from "react-router-dom";
export default function Degree() {
  const navigate = useNavigate();
  const ctx = useContext(DataContext);
  return (
    <React.Fragment>
      <div className={classes.mainHeading}>
        <h2 className={classes.title}>Matric Degrees</h2>
      </div>
      <div className={classes.container}>
        {ctx.MatricDegrees.map((matric) => {
          return (
            <Intro
              btnTitle="See More"
              onClickFunc={() =>
                navigate("/seemore", {
                  state: {
                    selectedDegId: matric.id,
                  },
                })
              }
              key={matric.id}
              image={matric.img}
              Title={matric.name}
              subTitle={matric.subName}
              description={matric.description}
            />
          );
        })}
      </div>
      <div className={classes.mainHeading}>
        <h2 className={classes.title}>Inter Degrees</h2>
      </div>
      <div className={classes.container}>
        {" "}
        {ctx.InterDegrees.map((inter) => {
          return (
            <Intro
              btnTitle="See More"
              onClickFunc={() =>
                navigate("/seemore", {
                  state: {
                    selectedDegId: inter.id,
                  },
                })
              }
              key={inter.id}
              image={inter.img}
              Title={inter.name}
              subTitle={inter.subName}
              description={inter.description}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
