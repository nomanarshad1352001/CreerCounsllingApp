import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Header(props) {
  const Onclose=()=>{
  props.setIsLoggedIn(false);
  }
  return (
    <Fragment>
      <header className={classes.header}>
      <button className={classes.btn} onClick={ props.Navfunc}> <div className={classes.Icons}><GiHamburgerMenu /></div></button>
        <h1 className={classes.title}> Career and Degree Counsling </h1>
        <div className={classes.login}>
          <Button btnTitle='Logout' onClickFunc={Onclose} />
        </div>
      </header>
    </Fragment>
  );
}
