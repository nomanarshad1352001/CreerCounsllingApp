import React, { useContext } from "react";
import Intro from "../Introduction/Intro";
import DataContext from "../../Store/data-context";
import classes from "./FilterClg.module.css";
import { useLocation } from "react-router-dom";
export default function FilteredColleges() {
  const Location = useLocation();
  const ctx = useContext(DataContext);
  console.log(Location.state.selectedDegName);
  const FilteredClg = ctx.colleges.filter((clg,index) => {
  return clg.degreeAvailable.includes(Location.state.selectedDegName)
  });
  console.log(FilteredClg);
  return (
    <React.Fragment>
      <h4 className={classes.title}>
        {" "}
        Available Colleges for your Selected Degree
      </h4>
      <div className={classes.container}>{FilteredClg.map((clg)=>{
        return( <Intro
          btnTitle={"See more"}
          // onClickFunc={() =>
          //   navigate("/Fclg", {
          //     state: {
          //       selectedDegName: Deg.name,
          //     },
          //   })
          // }
          key={clg.id}
          image={clg.img}
          Title={clg.Title}
          subTitle={clg.subTitle}
          description={clg.description}
        />)
      })}</div>
    </React.Fragment>
  );
}
