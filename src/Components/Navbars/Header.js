import React, { Fragment } from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.title}> Career and Degree Counsling </h1>
        <h4 className={classes.login}>Login</h4>
      </header>
    </Fragment>
  );
}
