import React, { Fragment } from "react";
import Button from "../UI/Button.js";
import Modal from "../UI/Modal.js";
import LoginMain from "./LoginMain.js";
export default function MainPage(props) {
  return (
    <Fragment>
      <div>MainPage</div>
      {props.LoginIsShown && (
        <Modal onClickFunc={props.onClose}>
          <LoginMain
            onCloseLogin={props.onClose}
            setUserLoginData={props.setUserLoginData}
            setIsLoggedIn={props.setIsLoggedIn}
          />
        </Modal>
      )}
      <Button btnTitle="Login" onClickFunc={props.OnShow} />
    </Fragment>
  );
}
