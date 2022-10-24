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
                    selected_Id: matric.id,
                selected_Title: matric.name,
                selected_subTitle: matric.subName,
                selected_Description: matric.description,
                selected_Image: matric.img
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
        {ctx.InterDegrees.map((inter) => {
          return (
            <Intro
              btnTitle="See More"
              onClickFunc={() =>
                navigate("/seemore", {
                  state: {
                    selected_Id: inter.id,
                selected_Title: inter.name,
                selected_subTitle: inter.subName,
                selected_Description: inter.description,
                selected_Image: inter.img
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
      <div className={classes.mainHeading}>
        <h2 className={classes.title}>Bachelor Studies Degrees</h2>
      </div>
      <div className={classes.container}>
        {ctx.BsDegrees.map((bsDegrees) => {
          return (
            <Intro
              btnTitle="See More"
              onClickFunc={() =>
                navigate("/seemore", {
                  state: {
                    selected_Id: bsDegrees.id,
                    selected_Title: bsDegrees.name,
                    selected_subTitle: bsDegrees.subName,
                    selected_Description: bsDegrees.description,
                    selected_Image: bsDegrees.img
                  },
                })
              }
              key={bsDegrees.id}
              image={bsDegrees.img}
              Title={bsDegrees.name}
              subTitle={bsDegrees.subName}
              description={bsDegrees.description}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
