import classes from "./Intro.module.css";
import React from "react";
import  Button from "../UI/Button.js";
// import eng from "../Material/Orange.jpg"
const Intro = (props) => {
  return (
    <section className={classes.Card}>
        <div className={classes.header}>
          <div className={classes.mainImage}>
          <img  src={props.img}  alt="fireSpot"/> 
          </div>
          <div className={classes.title}>
            <h1>{props.Title}</h1>
          </div>
        </div>
        <div className={classes.Subtitle}>
      <h2>{props.subTitle}</h2>
      </div>
      <div className={classes.description}>
      <p>
        {props.description}
      </p>
      </div>
      <div className={classes.btnContainer}>
      <Button color="#ff4e22" btnTitle={props.btnTitle}  onClickFunc={props.onClickFunc}/>
     {props.Check && <Button color="#54BAB9" btnTitle={props.btnTitle1}  onClickFunc={props.onClickFunc1}/>}
     {props.Check && <Button color="#781C68" btnTitle={props.btnTitle2}  onClickFunc={props.onClickFunc2}/>}
      </div>
    </section>
  );
};

export default Intro;