import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.title}> Career and Degree Counsling </h1>
        <div className={classes.login}>
          <Button/>
        </div>
      </header>
    </Fragment>
  );
}
