import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import LoginMain from "../Main/LoginMain.js";
import Modal from "../UI/Modal";
export default function Header(props) {
  const OnLogOut = () => {
    props.setIsLoggedIn(false);
  };
  return (
    <Fragment>
      {props.LoginIsShown && (
        <Modal onClickFunc={props.onClose}>
          <LoginMain onCloseLogin={props.onClose}  setUserLoginData={props.setUserLoginData} IsLoggedIn={props.IsLoggedIn} setIsLoggedIn={props.setIsLoggedIn} />
        </Modal>
      )}
      <header className={classes.header}>
        <button className={classes.btn} onClick={props.Navfunc}>
          {" "}
          <div className={classes.Icons}>
            <GiHamburgerMenu />
          </div>
        </button>
        <h1 className={classes.title}> Career & Degree Counselling </h1>
        <div className={classes.login}>
          {props.IsLoggedIn?<Button color="#E9590C" btnTitle="Logout" onClickFunc={OnLogOut} />: <Button color="#53A25B" btnTitle="LogIn" onClickFunc={props.OnShow} /> }
        </div>
      </header>
    </Fragment>
  );
}
