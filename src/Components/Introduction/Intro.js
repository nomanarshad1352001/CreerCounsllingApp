import classes from "./Intro.module.css";
import React from "react";
import  Button from "../UI/Button.js";
const Intro = (props) => {
  return (
    <section className={classes.summary}>
        <div className={classes.header}>
          <div className={classes.mainImage}>
          <img  src={props.image}  alt="fireSpot"/> 
          </div>
          <div className={classes.title}>
            <h1>{props.Title}</h1>
          </div>
        </div>

      <h2>{props.subTitle}</h2>
      <p>
        {props.description}
      </p>
      <Button btnTitle={props.btnTitle} btnIcon={props.btnIcon} onClickFunc={props.onClickFunc}/>
    </section>
  );
};

export default Intro;
