import classes from "./Intro.module.css";
import React from "react";
import MyCard from '../UI/MyCard.js'
const Intro = () => {
  return (
    <section className={classes.summary}>
      <MyCard>
      <div className={classes.header1}>
        <h1>Introduction</h1>
      </div>
      <h2 className={classes.degname}>Matric</h2>
      </MyCard>

      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat
        repellat atque rerum accusamus impedit necessitatibus dolor, facilis ea
        quibusdam quas ex earum temporibus exercitationem dolore est. Veniam,
      </p>
    </section>
  );
};

export default Intro;
