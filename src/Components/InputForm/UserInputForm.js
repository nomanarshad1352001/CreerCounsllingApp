import classes from "./InputForm.module.css";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button.js";
import { useNavigate } from "react-router-dom";
export default function UserInputForm(props) {
  const navigate =useNavigate();
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
    PassedDegree:  "Matric Science(com)",
    Marks: "",
  };
  const [userData, setuserData] = useState(initialState);
  const [Edit, setEdit] = useState(false);
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setuserData({
      ...userData,
      [name]: value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (Edit === true) {
      props.setUser(userData);
      setEdit(false);
    } else {
      props.setUser(userData);
    }
    setuserData({
      Name: "",
      PassedDegree: "",
      Marks: "",
    });
    navigate('/Fdegree')
  };
  const OnEdit = (event) => {
    event.preventDefault();
    setEdit(true);
    setuserData({
      Name: props.User.Name,
      PassedDegree: props.User.PassedDegree,
      Marks: props.User.Marks,
    });
  };
  console.log(props.User,"InputForm");
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
                defaultValue=""
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
