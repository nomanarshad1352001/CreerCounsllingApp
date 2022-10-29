import classes from "./Seemore.module.css";
import React, { Fragment} from "react";
import { useLocation } from "react-router-dom";
const Seemore = (props) => {
  const Location = useLocation();
  return (
    <Fragment>
      {/* <h1>{Location.state.selected_Id}</h1>
      <h1>{Location.state.selected_Title}</h1>
      <h1>{Location.state.selected_subTitle}</h1>
      <h1>{Location.state.selected_Description}</h1>
      <h1>{Location.state.selected_Image}</h1> */}
      <section className={classes.seemore}>
        <div className={classes.header}>
          <div className={classes.mainImage}>
            <img  src={props.image}  alt="fireSpot"/>   
          </div>
        </div>
        <div className={classes.text}>
          <div className={classes.title}>
            <h1>{props.Title}</h1>
            <h1>{Location.state.selected_Title}</h1>
          </div>
          <h3>{props.subTitle}</h3>
          <h3>{Location.state.selected_subTitle}</h3>
          <p>{props.description}</p>
          <p>{Location.state.selected_Description}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Seemore;
