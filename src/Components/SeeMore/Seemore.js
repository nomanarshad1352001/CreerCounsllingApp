import React, { useContext, Fragment } from "react";
import DataContext from "../../Store/data-context.js";
import classes from "./Seemore.module.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import BS from "../Material/Bs.jpg";
const Seemore = () => {
  const ctx = useContext(DataContext);
  const Location = useLocation();
  const navigate = useNavigate();
  let SeeMore;
  Location.state.clgCheck === true
    ? (SeeMore = ctx.Colleges)
    : (SeeMore = ctx.Degrees);
  let final = SeeMore.find((obj) => obj.name === Location.state.selected_name);
  console.log(final);
  return (
    <Fragment>
      <section className={classes.Card}>
        <div className={classes.header}>
          <div className={classes.mainImage}>
            <img src={final.selectedFile} alt="fireSpot" />
          </div>
          <div className={classes.title}>
            <h1>{final.name}</h1>
          </div>
        </div>
        <div className={classes.Subtitle}>
          <h2>{final.subName}</h2>
        </div>
        <div className={classes.description}>
          <p>{final.detail}</p>
        </div>
        {Location.state.clgCheck === true ? (
          <div>
            {" "}
            <h1 className={classes._MainTitle}>Degrees Available</h1>
            <div className={classes._Main}>
              {final.offeringDegrees.map((da, index) => {
                return (
                  <div
                    onClick={() =>
                      navigate("/seemore", {
                        state: { selected_name: da },
                      })
                    }
                    className={classes.deg}
                    key={index}
                  >
                    {da}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <h3 className={classes._MainTitle}>Subjects</h3>
            <div className={classes._Main}>
              {final.subjects.map((sem, index) => {
                return (
                  <div className={classes.sem} key={index}>
                    {" "}
                    <div className={classes.semTitle}>
                      {final.degType === "Graduation" ? (
                        
                        <div>
                          Semester {index + 1}</div>
                      ) : (
                        <div>Year {index + 1}</div>
                      )}
                    </div>
                    <div className={classes.MainSub}>
                      {" "}
                      {sem.map((sub, index) => {
                        return (
                          <div className={classes.sub} key={index}>
                            {sub}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <h1 className={classes._MainTitle}>Jobs</h1>
            <div className={classes._Main}>
              {final.Jobs.map((job, index) => {
                return (
                  <div className={classes.job} key={index}>
                    {job}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div>
        <a className={classes._MainTitle} href={final.link}>Institute Website link</a>
        </div>
      </section>
    </Fragment>
  );
};

export default Seemore;
