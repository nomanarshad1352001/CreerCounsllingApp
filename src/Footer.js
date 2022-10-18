import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.social}>
        <a href="/" className={classes.fab}><i><FaFacebookSquare /></i></a>
        <a href="/" className={classes.fab}><i>
          <FaTwitterSquare /></i></a>
        <a href="/" className={classes.fab}><i><FaInstagramSquare /></i></a>
      </div>
      <ul className={classes.list}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      <p className={classes.copyright}>
        Career counsling App @ 2022
      </p>
    </section>
  );
};
export default Footer;
