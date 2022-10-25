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
      <div className={classes.btnContainer}>
      <Button btnTitle={props.btnTitle}  onClickFunc={props.onClickFunc}/>
     {props.Check && <Button btnTitle={props.btnTitle1}  onClickFunc={props.onClickFunc1}/>}
     {props.Check && <Button btnTitle={props.btnTitle2}  onClickFunc={props.onClickFunc2}/>}
      </div>
    </section>
  );
};

export default Intro;
