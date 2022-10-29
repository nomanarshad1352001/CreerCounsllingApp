import React from "react";
import Intro from "../Introduction/Intro.js";
import clasess from "./Home.module.css";
import interimg from '../Material/Inter.jpg'
import Bsimg from '../Material/Bs.jpg'
export default function Home(props) {
  return (
    <React.Fragment>
      <div className={clasess.Maincontainer}>
    <div className={clasess.container}>
        <Intro
        image={interimg}
          Title="Intermediate / Higher Secondary School Certificate"
          subTitle="A College level Education"
          description="Secondary education is an important segment in every person's life. It also serves as a means to potentially empower girls, raise a person's economic status and reduce infant mortality rates as these listed facts will show"
          btnTitle='Your Info'
          onClickFunc={props.OnClick}
        />
      <Intro
      image={Bsimg}
          Title="Bachelor Studies / Graduation and Masters "
          subTitle="A University level Education"
          description="Secondary education is an important segment in every person's life. It also serves as a means to potentially empower girls, raise a person's economic status and reduce infant mortality rates as these listed facts will showHaving a bachelor's degree will keep you in demand as the need for skilled, college-educated workers continues to rise. Over 80 percent of jobs in four of the fastest-growing occupations—healthcare, STEM, education, and government services—demand postsecondary education."
          btnTitle='Your Info'
          onClickFunc={props.OnClick}
        />
    </div>
    </div>
  </React.Fragment>
  );
}
