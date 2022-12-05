import React, { useContext } from "react";
import Intro from "../Introduction/Intro";
import DataContext from "../../Store/data-context";
import classes from "./Colleges.module.css";
import { useLocation, useNavigate } from "react-router-dom";
// import colg from "../Material/gc-town.jpg";
import Button from "../UI/Button";

export default function FilteredColleges() {
  const navigate = useNavigate();
  const Location = useLocation();
  const ctx = useContext(DataContext);
  const FilteredClg = ctx.Colleges.filter((clg, index) =>
    clg.offeringDegrees.includes(Location.state.selected_Title)
  );
  const goBack = () => {
    navigate("/Fdegree");
  };
  return (
    <React.Fragment>
      <div className={classes.Maincontainer}>
        <div className={classes.mainHeading}>
          <h2 className={classes.title}>
            Colleges for {Location.state.selected_Title}
          </h2>
          <h3 className={classes.length}>
            Total Colleges: {FilteredClg.length}
          </h3>
        </div>
        <div className={classes.container}>
          {FilteredClg.map((clg) => {
            return (
              <Intro
                padding="5px"
                btnTitle={"More"}
                onClickFunc={() =>
                  navigate("/seemore", {
                    state: {
                      selected_name: clg.name,
                      clgCheck: true
                    },
                  })
                }
                key={clg.tag}
                image={clg.selectedFile}
                Title={clg.name}
                subTitle={clg.subName}
                description={clg.description}
              />
            );
          })}
        </div>
        <div className={classes.btnContainer}>
          {Location.state.Check && (
            <Button
              padding="5px"
              color="blueviolet"
              btnTitle="Go Back"
              onClickFunc={goBack}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
