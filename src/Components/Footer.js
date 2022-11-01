import React from "react";
import classes from "./Footer.module.css";
import { FiFacebook,
         FiTwitter,
         FiInstagram 
        } from "react-icons/fi";
const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.footer}>
        <section className={classes.container}>
          <div className={classes.links}>
          <ul className={classes.list}>
            <h3>Go To</h3>
            <li>Home</li>
            <br />
            <li>Contact</li>
            <br />
            <li>About</li>
          </ul>
          <ul className={classes.list}>
            <h3>Institutions</h3>
            <li>Schools</li>
            <br />
            <li>Colleges</li>
            <br />
            <li>University</li>
          </ul>
          <ul className={classes.list}>
            <h3>Related Links</h3>
            <li>
              <a href="/">Okas</a>{" "}
            </li>
            <br />
            <li>
              {" "}
              <a href="/">Bise lahore</a>
            </li>
            <br />
            <li>
              {" "}
              <a href="/">Punjab university</a>
            </li>
          </ul>
          </div>
          <div className={classes.social}>
            <h3>Social Media</h3>
            <a href="/">
              <i>
                <FiFacebook />
              </i>
            </a>
            <a href="/">
              <i>
                <FiTwitter />
              </i>
            </a>
            <a href="/">
              <i>
                <FiInstagram />
              </i>
            </a>
          </div>
        </section>
        <p className={classes.copyright}>© 2022 Career & Degree Counselling App, All Rights Reserved</p>
      </div>
    </React.Fragment>
  );
};
export default Footer;
