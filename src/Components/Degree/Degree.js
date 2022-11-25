import React, { useContext } from "react";
import DataContext from "../../Store/data-context.js";
import CheckedDegrees from "./CheckedDegrees.js";
import classes from "./degree.module.css";
export default function Degree() {
  const ctx = useContext(DataContext);
  const MatricDegrees=ctx.Degrees.filter((deg)=>deg.degType==="Metriculation")
  const InterDegrees=ctx.Degrees.filter((deg)=>deg.degType==="Intermediate")
  const BSDegrees=ctx.Degrees.filter((deg)=>deg.degType==="Graduation")
  return (
   <React.Fragment>
    <div className={classes.imgTitle}>We offer you a Comprehensive option for your Degree Selections </div>
    <CheckedDegrees Length={MatricDegrees.length} Title="Matricculation" Degree={MatricDegrees} />
    <CheckedDegrees Length={InterDegrees.length} Title="Intermediate" Degree={InterDegrees} />
    <CheckedDegrees Length={BSDegrees.length} Title="BS" Degree={BSDegrees} />
   </React.Fragment>
  );
}
