import classes from "./InputForm.module.css";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button.js";
export default function UserInputForm(props) {
  const options = [
    "Matric Science(com)",
    "Matric Science(bio)",
    "Matric Arts",
    "FSC(Pre Engineering)",
    "FSC(Pre Medical)",
    "ICS(Physics)",
    "ICS(Stastics)",
    "ICS(Economics)",
    "ICOM",
  ];
  const initialState = {
    Name: "",
    PassedDegree: "",
    Marks: "",
  };
  // const [name, setName] = useState("");
  // const [passedDegree, setpassedDegree] = useState("Matric Science(com)");
  // const [marks, setMarks] = useState("");
  // const inputNameHandler = (event) => {
  //   setName(event.target.value);
  // };
  // const inputpassedDegreeHandler = (event) => {
  //   setpassedDegree(event.target.value);
  // };
  // const inputMarksHandler = (event) => {
  //   setMarks(event.target.value);
  // };
  const [userData, setuserData] = useState(initialState);
  const [User, setUser] = useState();
  const [Edit, setEdit] = useState(false);
  const inputHandler = (event) => {
    const { name, value } = event.target;

    console.log( "-------------", event.target)

    setuserData({
      ...userData,
      [name]: value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(userData);
    if (Edit === true) {
      setUser(userData);
      setEdit(false);
      console.log(userData);
    } else {
      setUser(userData);
    }
    setuserData({
      Name: "",
      PassedDegree: "",
      Marks: "",
    });
  };
  const OnEdit = (event) => {
    event.preventDefault();
    setEdit(true);
    setuserData({
      Name: User.Name,
      PassedDegree: User.PassedDegree,
      Marks: User.Marks,
    });
  };
  return (
    <Modal onClickFunc={props.onClose}>
      <div className={classes.heading}>
        <h3>Enter the Data</h3>
      </div>
      <form>
        <label>Name</label>
        <input
          placeholder="Enter your name"
          type="text"
          name="Name"
          value={userData.Name}
          onChange={inputHandler}
        />
        <label>Passed Degree</label>
        <select onChange={inputHandler} name="PassedDegree">
          {options.map((option, index) => {
            return (
              <option
                defaultValue="Matric Science(com)"
                value={options.value}
                key={index}
              >
                {option}
              </option>
            );
          })}
        </select>
        <label>Your Marks</label>
        <input
          placeholder="Enter your Marks"
          type="text"
          name="Marks"
          value={userData.Marks}
          onChange={inputHandler}
        />
        <div className={classes.btnContainer}>
          <Button onClickFunc={submitForm} btnTitle="Submit" />
          <Button onClickFunc={props.onClose} btnTitle="Close" />
          <Button onClickFunc={OnEdit} btnTitle="Edit" />
        </div>
      </form>
    </Modal>
  );
}
