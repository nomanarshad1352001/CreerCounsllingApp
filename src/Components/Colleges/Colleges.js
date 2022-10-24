import React, { useContext } from "react";
import Intro from "../Introduction/Intro.js";
import classes from "./Colleges.module.css";
import DataContext from "../../Store/data-context";
import { useNavigate } from "react-router-dom";
export default function Colleges() {
  const navigate = useNavigate();
  const ctx = useContext(DataContext);
  return (
    <React.Fragment>
      <div className={classes.mainHeading}>
        <h2 className={classes.title}>All available Colleges</h2>
      </div>
    <div className={classes.container}>
      {ctx.Colleges.map((clg)=>{
        return(<Intro
        key={clg.id}
          Title={clg.Title}
          subTitle={clg.subTitle}
          description={clg.description}
          btnTitle="See More"
          onClickFunc={() =>
            navigate("/seemore", {
              state: {
                selectedclgId: clg.id,
                selectedclgTitle: clg.Title,
                selectedclgsubTitle: clg.subTitle,
                selectedclgDescription: clg.description,
              },
            })
          }
        />)
      })}
    </div>
    </React.Fragment>
  );
}