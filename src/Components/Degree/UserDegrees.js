import React from "react";
import Intro from "../Introduction/Intro.js";
import classes from "../Degree/degree.module.css";
export default function UserDegrees(props) {
  const Check = props.UserData.PassedDegree === props.Check ? true : false;

  // ctx.MatricDegrees.filter(c=>c.name===ctx.UserData.PassedDegree).length>0
  console.log(Check);
  return (
    <React.Fragment>
      {Check === true && <h4 className={classes.title}> {props.Title}</h4>}
      <div className={classes.container}>
        {Check === true &&
          props.Degrees.map((Deg, index) => {
            console.log(props.Condition[index]);
            console.log(Deg.name);
            if (Deg.name === props.Condition[index])
              return (
                <Intro
                btnTitle="See More"
                  key={Deg.id}
                  image={Deg.img}
                  Title={Deg.name}
                  subTitle={Deg.subName}
                  description={Deg.description}
                />
              );
          })}
      </div>
    </React.Fragment>
  );
}
