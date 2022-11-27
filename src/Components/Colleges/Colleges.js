import React, { useContext } from "react";
import Intro from "../Introduction/Intro.js";
import classes from "./Colleges.module.css";
import DataContext from "../../Store/data-context";
import { useNavigate } from "react-router-dom";
import colg from "../Material/civil.jpg"
export default function Colleges() {
  const navigate = useNavigate();
  const ctx = useContext(DataContext);
  return (
    <React.Fragment>
      <div className={classes.Maincontainer}>
      <div className={classes.mainHeading}>
        <h2 className={classes.title}>All Colleges</h2>
      </div>
    <div className={classes.container}>
      {ctx.Colleges.map((clg)=>{
        return(<Intro
          padding='5px'
        key={clg.id}
          Title={clg.name}
          subTitle={clg.subName}
          description={clg.description}
          image={colg}
          btnTitle="More"
          onClickFunc={() =>
            navigate("/seemore", {
              state:{selected_name: clg.name,
             clgCheck:true
              }})}
        />)
      })}
    </div>
    </div>
    </React.Fragment>
  );
}