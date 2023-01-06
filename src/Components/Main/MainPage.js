import React, { Fragment, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import clasess from "./Mainpage.module.css";
import img1 from "../Material/1.png";
import img2 from "../Material/2.png";
import img4 from "../Material/3.png";
import img5 from "../Material/5.png";
export default function MainPage(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <div className={clasess.topTitle}>Lets Started</div>
      <Slider {...settings}>
        <div>
          <div className={clasess.container}>
            <div>
              <div className={clasess.mainImage}>
                {" "}
                <img src={img1} alt="fireSpot" />
              </div>
            </div>

            <div className={clasess.innerText}>
              {" "}
              <h3>What Is Career Counselling?</h3>
              <p>
                Career Counselling is the process of giving advice, support and
                guidance for selecting the right stream after class 10th, and
                the right career after 12th and graduation. Career confusion and
                indecision can affect you at any stage of your career, thus it
                is important to get the right support to resolve it and plan
                ahead.
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className={clasess.container}>
            <div>
              {" "}
              <div className={clasess.mainImage}>
                {" "}
                <img src={img2} alt="fireSpot" />
              </div>{" "}
            </div>

            <div className={clasess.innerText}>
              {" "}
              <h3>Why Do I Need Career Counselling?</h3>
              <p>Here are a few ways in which career counselling helps us:</p>
              <p>Helps Pick The Right Career</p>
              <p>Helps Provide Expert Resources</p>
              <p>Helps Gain Confidence And Insight</p>
            </div>
          </div>
        </div>
        <div>
          <div className={clasess.container}>
            <div>
              {" "}
              <div className={clasess.mainImage}>
                {" "}
                <img src={img5} alt="fireSpot" />
              </div>{" "}
            </div>

            <div className={clasess.innerText}>
              <h3>Who Need Career Counselling & When?</h3>
              <p>
                The perfect time for students to seek Career Counselling is
                during the ages 13-17 years (8th standard to 12th standard). It
                is a time when career decisions are made. This is why they need
                someone to guide them in the right direction at this time.
              </p>{" "}
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className={clasess.container}>
            <div>
              {" "}
              <div className={clasess.mainImage}>
                {" "}
                <img src={img4} alt="fireSpot" />
              </div>{" "}
            </div>
            <div className={clasess.innerText}>
              <h3>What Career Counselling Is Not</h3>
              <p>
                It is not general advice about careers, courses and curriculum.
              </p>
              <p>It is not a short-term process that gives instant results.</p>
              <p>
                It is not a service that helps you get jobs or admissions in
                companies and colleges respectively.
              </p>
              <p>It is not a procedure that runs on trial-and-error.</p>
            </div>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
}
