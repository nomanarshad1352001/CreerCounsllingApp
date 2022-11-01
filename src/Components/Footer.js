import React from "react";
import classes from "./Footer.module.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.footer}>
        <section className={classes.container}>
          <ul className={classes.list}>
            <h4>GO To</h4>
            <li>Home</li>
            <br />
            <li>Contact</li>
            <br />
            <li>About</li>
          </ul>
          <ul>
            <h4>Institutions</h4>
            <li>Schools</li>
            <br />
            <li>Colleges</li>
            <br />
            <li>University</li>
          </ul>
          <ul>
            <h4>Related Links</h4>
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
          <div className={classes.social}>
            <h4>Social Media</h4>
            <a href="/">
              <i>
                <FaFacebookSquare />
              </i>
            </a>
            <a href="/">
              <i>
                <FaTwitterSquare />
              </i>
            </a>
            <a href="/">
              <i>
                <FaInstagramSquare />
              </i>
            </a>
          </div>
        </section>
        <p className={classes.copyright}>Career counsling App @ 2022</p>
      </div>
    </React.Fragment>
  );
};
export default Footer;
