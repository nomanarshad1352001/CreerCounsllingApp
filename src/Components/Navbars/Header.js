import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.title}> Career and Degree Counsling </h1>
        <div className={classes.login}>
          <Button btnTitle='Login'  onClickFunc={() =>navigate("/login")}/>
        </div>
      </header>
    </Fragment>
  );
}
