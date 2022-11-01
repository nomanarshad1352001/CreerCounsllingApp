import React from 'react'
import Intro from "../Introduction/Intro.js";
import classes from "./degree.module.css";
import { useNavigate } from "react-router-dom";
import mcom from "../Material/mcom.png";
export default function CheckedDegrees(props) {
    const navigate = useNavigate();
  return (
    <React.Fragment>
    <div className={classes.mainHeading}>
      <h2 className={classes.title}>{props.Title}</h2>
      <h3  className={classes.length}>Total Degrees: {props.Length}</h3>
    </div>
    <div className={classes.container}>
      {props.Degree.map((Deg) => {
        console.log(Deg);
        return (
          <Intro
          btnTitle={"Colleges"}
              btnTitle1={"More"}
              btnTitle2={"Jobs"}
              onClickFunc={() =>
                navigate("/Fclg", {
                  state: {
                    selected_Title: Deg.name,
                  },
                })
              }
              onClickFunc1={() =>
                navigate("/seemore", {
                  state: {
                    selected_Id: Deg.id,
                    selected_Title: Deg.name,
                    selected_subTitle: Deg.subName,
                    selected_Description: Deg.description,
                    selected_Image: Deg.img,
                  },
                })
              }
              onClickFunc2={() =>
                navigate("/Jobs", {
                  state: {
                    // selected_Id: Deg.id,
                    // selected_Title: Deg.name,
                    // selected_Description: Deg.description,
                    Selected_Jobs:Deg
                  },
                })
              }
          Check={true}
            key={Deg.id}
            image={mcom}
            Title={Deg.name}
            subTitle={Deg.subName}
            description={Deg.description}
          />
        );
      })}
    </div>
  </React.Fragment>
  )
}
