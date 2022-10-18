import classes from "./InputForm.module.css";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button.js";
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
    <Modal onClickFunc={props.onClose}>
      <div className={classes.heading}>
        <h3>Enter the Data</h3>
      </div>
      <form>
      <label>Name</label>
        <input
          type="text"
          value={Name}
          onChange={inputNameHandler}
        />
        <label>Passed Degree</label>
        <select>
          <option
            className={classes.Option}
            onChange={inputpassedDegreeHandler}
            value={passedDegree}
          >
            Matric
          </option>
          <option onChange={inputpassedDegreeHandler} value={passedDegree}>
            Intermediate
          </option>
        </select>
        <label>Optional Subject 1</label>
        <input
          type="text"
          value={optionalSubject1}
          onChange={inputoptionalSubject1Handler}
        />
        <label>Optional Subject 2</label>
        <input
          type="text"
          value={optionalSubject2}
          onChange={inputoptionalSubject2Handler}
        />
        <label>Optional Subject 3</label>
        <input
          type="text"
          value={optionalSubject3}
          onChange={inputoptionalSubject3Handler}
        />
        <label>Optional Subject 4</label>
        <input
          type="text"
          value={optionalSubject4}
          onChange={inputoptionalSubject4Handler}
        />
        <div className={classes.btnContainer}>
          <Button onClickFunc={submitForm} btnTitle="Submit" />
          <Button onClickFunc={props.onClose} btnTitle="Close" />
        </div>
      </form>
    </Modal>
  );
}
