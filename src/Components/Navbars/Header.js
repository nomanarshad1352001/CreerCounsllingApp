import React, {Fragment } from "react";
import Button from "../UI/Button";
import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const Navfunc = () => {
    props.setIsNavbarShow(true);
  }
  const navigate = useNavigate();
  const OnLogOut = () => {
    props.setIsLoggedIn(false);
  };
 const OnLoginShow=()=>{
  navigate("/login")
  }
  return (
    <Fragment>
      <header className={classes.header}>
       {props.IsLoggedIn&&  <button className={classes.btn} onClick={Navfunc}>
          {" "}
          <div className={classes.Icons}>
            <GiHamburgerMenu />
          </div>
        </button>}
        <h1 className={classes.title}> Career & Degree Counselling </h1>
        <div className={classes.login}>
          {props.IsLoggedIn?<Button color="#E9590C" btnTitle="Logout" onClickFunc={OnLogOut} />: <Button color="#53A25B" btnTitle="LogIn" onClickFunc={OnLoginShow} /> }
        </div>
      </header>
    </Fragment>
  );
}
