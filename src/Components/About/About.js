import React from "react";
import User from "./UserIntroCard/User.js";
import clasess from "./About.module.css";
import MainSlider from "../Slider/MainSlider.js";
export default function About() {
  return (
    <React.Fragment>
      <div className={clasess.Maincontainer}>
        <div className={clasess.widthSpecifier}>
        <div className={clasess.container}>
          <div className={clasess.item1}>
            <User />
          </div>
          <div className={clasess.item2}>
            <User />
          </div>
        </div>
        <MainSlider />
        </div>
      </div>
    </React.Fragment>
  );
}
