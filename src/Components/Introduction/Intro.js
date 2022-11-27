import classes from "./Intro.module.css";
import React from "react";
import Button from "../UI/Button.js";
// import eng from "../Material/Bs.jpg"
const Intro = (props) => {
  return (
    <section className={classes.Card}>
      <div className={classes.header}>
        <div className={classes.mainImage}>
          <img src={props.image} alt="fireSpot" />
        </div>
        <div className={classes.title}>
          <h1>{props.Title}</h1>
        </div>
      </div>
      <div className={classes.Subtitle}>
        <h2>{props.subTitle}</h2>
      </div>
      <div className={classes.description}>
        <p>{props.description}</p>
      </div>
      <div className={classes.btncontainer}>
        <Button
          color="#ff4e22"
          btnTitle={props.btnTitle}
          onClickFunc={props.onClickFunc}
        />
        {props.Check && (
          <Button
            color="#54BAB9"
            btnTitle={props.btnTitle1}
            onClickFunc={props.onClickFunc1}
          />
        )}
      </div>
    </section>
  );
};

export default Intro;
