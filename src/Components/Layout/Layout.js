import React from "react";
import Header from "../Navbars/Header.js";
import SideNavbar from "../Navbars/SideNavbar.js";
import clasess from "./Layout.module.css";
import AppSummary from "../Introduction/AppSummary.js";
export default function() {
  return (
    <div className={clasess.container}>
      <div className={clasess.item1}>
        <Header />
      </div>
      <div className={clasess.item2}>
        <SideNavbar />
      </div>
      <div className={clasess.item3}>
        <AppSummary/>
      </div>
      <div className={clasess.item4}>
      <AppSummary/>
      </div>
      <div className={clasess.item5}>footer</div>
    </div>
  );
}
