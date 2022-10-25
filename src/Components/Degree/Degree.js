import React, { useContext } from "react";
import DataContext from "../../Store/data-context.js";
import CheckedDegrees from "./CheckedDegrees.js";
export default function Degree() {
  const ctx = useContext(DataContext);
  const MatricDegrees=ctx.Degrees.filter((deg)=>deg.degType==="Metriculation")
  const InterDegrees=ctx.Degrees.filter((deg)=>deg.degType==="Intermediate")
  const BSDegrees=ctx.Degrees.filter((deg)=>deg.degType==="Graduation")
  return (
   <React.Fragment>
    <CheckedDegrees Length={MatricDegrees.length} Title="Matricculation" Degree={MatricDegrees} />
    <CheckedDegrees Length={InterDegrees.length} Title="Intermediate" Degree={InterDegrees} />
    <CheckedDegrees Length={BSDegrees.length} Title="BS" Degree={BSDegrees} />
   </React.Fragment>
  );
}
