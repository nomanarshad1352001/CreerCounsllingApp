import classes from "./AppSummary.module.css";
import React from "react";
import IntroDeg from "./IntroDeg";
import MyCard from '../UI/MyCard.js'
const AppSummary = () => {
  return (
    <section className={classes.summary}>
      <MyCard>
        <IntroDeg />
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
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat
        repellat atque rerum accusamus impedit necessitatibus dolor, facilis ea
        quibusdam quas ex earum temporibus exercitationem dolore est. Veniam,
        corrupti repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat
        repellat atque rerum accusamus impedit necessitatibus dolor, facilis ea
        quibusdam quas ex earum temporibus exercitationem dolore est. Veniam,
        corrupti repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugiat
        repellat atque rerum accusamus impedit necessitatibus dolor, facilis ea
        quibusdam quas ex earum temporibus exercitationem dolore est. Veniam,
        corrupti repudiandae.corrupti repudiandae.
      </p>
    </section>
  );
};

export default AppSummary;
