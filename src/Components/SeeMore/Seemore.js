import classes from "./Seemore.module.css";
// import interimg from '../Material/Inter.jpg'

import React from "react";
const Seemore = (props) => {
  return (
    <section className={classes.seemore}>
        <div className={classes.header}>
          <div className={classes.mainImage}>
            <img  src={props.image}  alt="fireSpot"/> 
          </div>
        </div>
        <div className={classes.text}>
            <div className={classes.title}>
                <h1>{props.Title}</h1>
            </div>
                <h3>{props.subTitle}</h3>
                <p>{props.description}</p>
        </div>
    </section>
  );
};

export default Seemore;
