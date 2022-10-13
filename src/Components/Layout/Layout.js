import React from "react";
import Header from "../Navbars/Header.js";
import SideNavbar from "../Navbars/SideNavbar.js";
import clasess from "./Layout.module.css";
import AppSummary from "../Introduction/Intro.js";
import UserInputForm from "../InputForm/UserInputForm.js";
import Degree from "../Degree/Degree.js";
export default function() {
  return (
    <React.Fragment><div className={clasess.container}>
    <div className={clasess.item1}>
      <Header />
    </div>
    <div className={clasess.item2}>
      <SideNavbar />
    </div>
    <div className={clasess.item3}>
      <UserInputForm/>
    </div>
    <div className={clasess.item4}>
      <Degree/>
    </div>
  </div>
  </React.Fragment>
    
  );
}
