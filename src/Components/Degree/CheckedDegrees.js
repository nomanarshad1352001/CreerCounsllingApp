import React from "react";
import Intro from "../Introduction/Intro.js";
import classes from "./degree.module.css";
import { useNavigate } from "react-router-dom";
// import mcom from "../Material/engineering.jpg";
export default function CheckedDegrees(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className={classes.Maincontainer}>
          <div className={classes.mainHeading}>
            <h2 className={classes.title}>{props.Title}</h2>
            <h3 className={classes.length}>Total Degrees: {props.Length}</h3>
          </div>
          <div className={classes.container}>
            {props.Degree.map((Deg) => {
              return (
                <Intro
                  btnTitle={"Colleges"}
                  btnTitle1={"More"}
                  onClickFunc={() =>
                    navigate("/Fclg", {state: { selected_Title: Deg.name }})}
                  onClickFunc1={() =>
                    navigate("/seemore", {
                      state: { selected_name: Deg.name}})}
                  Check={true}
                  key={Deg.id}
                  image={Deg.selectedFile}
                  Title={Deg.name}
                  subTitle={Deg.subName}
                  description={Deg.description}
                />
              );
            })}
          </div>
      </div>
    </React.Fragment>
  );
}
