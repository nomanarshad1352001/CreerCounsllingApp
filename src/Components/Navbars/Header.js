import React, { Fragment } from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.title}> Career and Degree Counsling </div>
      </div>
    </Fragment>
  );
}
