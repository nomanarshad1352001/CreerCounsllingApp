import React, { useContext } from "react";
import Intro from "../Introduction/Intro.js";
import clasess from "./Colleges.module.css";
import DataContext from "../../Store/data-context";
export default function Colleges() {
  const ctx = useContext(DataContext);
  return (
    <React.Fragment>
      <div className={clasess.title}>All available Colleges</div>
    <div className={clasess.container}>
      {ctx.colleges.map((clg)=>{
        return(<Intro
        key={clg.id}
          Title={clg.Title}
          subTitle={clg.subTitle}
          description={clg.description}
          btnTitle="See More"
        />)
      })}
    </div>
    </React.Fragment>
  );
}
