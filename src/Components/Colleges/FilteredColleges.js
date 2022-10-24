import React, { useContext } from "react";
import Intro from "../Introduction/Intro";
import DataContext from "../../Store/data-context";
import classes from "./FilterClg.module.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function FilteredColleges() {
  const navigate = useNavigate();
  const Location = useLocation();
  const ctx = useContext(DataContext);
  console.log(Location.state.selectedDegName);
  const FilteredClg = ctx.Colleges.filter((clg, index) => {
    return clg.degreeAvailable.includes(Location.state.selectedDegName);
  });
  console.log(FilteredClg);
  return (
    <React.Fragment>
      <div className={classes.mainHeading}>
        <h4 className={classes.title}>
          {" "}
          Available Colleges for your Selected Degree
        </h4>
      </div>

      <div className={classes.container}>
        {FilteredClg.map((clg) => {
          return (
            <Intro
              btnTitle={"See more"}
              onClickFunc={() =>
                navigate("/seemore", {
                  state: {
                    selectedclgName: clg.id,
                  },
                })
              }
              key={clg.id}
              image={clg.img}
              Title={clg.Title}
              subTitle={clg.subTitle}
              description={clg.description}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
