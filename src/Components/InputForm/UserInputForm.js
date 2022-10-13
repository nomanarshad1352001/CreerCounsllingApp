import classes from "./InputForm.module.css";
import React, { useState } from "react";
import MyCard from "../UI/MyCard.js";
export default function UserInputForm(props) {
  const submitForm = (event) => {
    event.preventDefault();
    const UserData = {
      Name: Name,
      passedDegree: passedDegree,
      optionalSubject1: optionalSubject1,
      optionalSubject3: optionalSubject2,
      optionalSubject2: optionalSubject3,
      optionalSubject4: optionalSubject4,
    };
  };
  const inputNameHandler = (event) => {
    setName(event.target.value);
    // console.log(event.target.value);
  };
  const inputpassedDegreeHandler = (event) => {
    setpassedDegree(event.target.value);
    // console.log(event.target.value);
  };
  const inputoptionalSubject1Handler = (event) => {
    setoptionalSubject1(event.target.value);
    // console.log(event.target.value);
  };
  const inputoptionalSubject2Handler = (event) => {
    setoptionalSubject2(event.target.value);
    // console.log(event.target.value);
  };
  const inputoptionalSubject3Handler = (event) => {
    setoptionalSubject3(event.target.value);
    // console.log(event.target.value);
  };
  const inputoptionalSubject4Handler = (event) => {
    setoptionalSubject4(event.target.value);
    // console.log(event.target.value);
  };
  const [Name, setName] = useState("");
  const [passedDegree, setpassedDegree] = useState("");
  const [optionalSubject1, setoptionalSubject1] = useState("");
  const [optionalSubject2, setoptionalSubject2] = useState("");
  const [optionalSubject3, setoptionalSubject3] = useState("");
  const [optionalSubject4, setoptionalSubject4] = useState("");

  return (
    <div className={classes.main}>

    
    <form onSubmit={submitForm}>
      <MyCard>
        <div className={classes.UserControls}>
          <div className={classes.UserControl}>
            <label>Name</label>
            <input type="text" value={Name} onChange={inputNameHandler} />
          </div>
          <div className={classes.UserControl}>
            <label>Passed Degree</label>
            <input
              type="Text"
              value={passedDegree}
              onChange={inputpassedDegreeHandler}
            />
          </div>
          <div className={classes.UserControl}>
            <label>Optional Subject 1</label>
            <input
              type="Text"
              value={optionalSubject1}
              onChange={inputoptionalSubject1Handler}
            />
          </div>
          <div className={classes.UserControl}>
            <label>Optional Subject 2</label>
            <input
              type="Text"
              value={optionalSubject2}
              onChange={inputoptionalSubject2Handler}
            />
          </div>
          <div className={classes.UserControl}>
            <label>Optional Subject 3</label>
            <input
              type="Text"
              value={optionalSubject3}
              onChange={inputoptionalSubject3Handler}
            />
          </div>
          <div className={classes.UserControl}>
            <label>Optional Subject 4</label>
            <input
              type="Text"
              value={optionalSubject4}
              onChange={inputoptionalSubject4Handler}
            />
          </div>
        </div>
      </MyCard>
    </form>
    </div>
  );
}
