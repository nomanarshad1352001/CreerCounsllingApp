import React from "react";
import Intro from "../Introduction/Intro.js";
import clasess from "./Home.module.css";
import interimg from "../Material/6.png";
import Bsimg from "../Material/5.png";
export default function Home(props) {
  return (
    <React.Fragment>
      <div className={clasess.Maincontainer}>
        <div className={clasess.container}>
          <Intro
            Title="Intermediate / Higher Secondary School Certificate"
            subTitle="A College level Education"
            description="Secondary education is an important segment in every person's life."
            btnTitle="Your Info"
            onClickFunc={props.OnClick}
          />
          <div className={clasess.mainImage}>
            {" "}
            <img className={clasess.mImage} src={interimg} alt="fireSpot" />
          </div>
          <div className={clasess.mainImage}>
            {" "}
            <img className={clasess.mImage} src={Bsimg} alt="fireSpot" />
          </div>
          <Intro
            Title="Bachelor Studies / Graduation and Masters "
            subTitle="A University level Education"
            description="Having a Bachelor's degree will keep you in demand as the need for skilled, college educated workers continues to rise."
            btnTitle="Your Info"
            onClickFunc={props.OnClick}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
