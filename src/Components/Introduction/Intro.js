import classes from "./Intro.module.css";
import React from "react";
import MyCard from "../UI/MyCard.js";
const Intro = () => {
  return (
    <section className={classes.summary}>
        <div className={classes.header}>
          <div className={classes.degname}>
            <h2>Matric</h2>
          </div>
          <div className={classes.title}>
            <h1>Introduction</h1>
          </div>
        </div>

      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
    </section>
  );
};

export default Intro;
