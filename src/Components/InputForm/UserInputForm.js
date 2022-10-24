import classes from "./InputForm.module.css";
import React, { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button.js";
import { useNavigate } from "react-router-dom";
export default function UserInputForm(props) {
  const navigate = useNavigate();
  const options = [
    "--select your degree--",
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
  const initialValue = {
    Name: "",
    PassedDegree: "",
    Marks: "",
  };
  const [userData, setuserData] = useState(initialValue);
  const [Edit, setEdit] = useState(false);
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setisSubmit] = useState(false)
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setuserData({
      ...userData,
      [name]: value,
    });
  }
  useEffect(() => {
    if (userData.Name !== "" && userData.PassedDegree !== "" && userData.Marks !== "") {
      setisSubmit(true);
    }
  }, [userData])
  const submitForm = (event) => {
    event.preventDefault();
    console.log(isSubmit);
    if (Edit === true) {
      isSubmit === true && props.setUser(userData);
      setEdit(false);
    } else {
      isSubmit === true && props.setUser(userData);
      setformErrors(Validate(userData))
    }
    setuserData({
      Name: "",
      PassedDegree: "",
      Marks: "",
    });
    isSubmit === true && navigate('/Fdegree');
  };
  const Validate = (values) => {
    setisSubmit(false)
    const errors = {};
    if (!values.Name) {
      errors.Name = "UserName is Required";
    }
    if (values.PassedDegree === "--select your degree--" || values.PassedDegree === "") {
      errors.PassedDegree = "PassedDegree is required";
    }
    if (!values.Marks) {
      errors.Marks = "Marks is Required";
    }
    return errors;
  }
  const OnEdit = (event) => {
    event.preventDefault();
    setEdit(true);
    setuserData({
      Name: props.User.Name,
      PassedDegree: props.User.PassedDegree,
      Marks: props.User.Marks,
    });
  };
  return (
    <Modal onClickFunc={props.onClose}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h3>Enter the Data</h3>
        </div>
        <form>
          <label className={classes.inputlabel}>Name</label>
          <p className={classes.errormsg}>{formErrors.Name}</p>
          <input
          placeholder="Enter your name"
          type="text"
          name="Name"
          value={userData.Name}
          onChange={inputHandler}
          />
          <label className={classes.inputlabel}>Passed Degree</label>
          <p className={classes.errormsg}>{formErrors.PassedDegree}</p>
          <select onChange={inputHandler} name="PassedDegree" value={userData.PassedDegree} >
            {options.map((option, index) => {
              return (
                <option
                  defaultValue="--select your degree--"
                  value={options.value}
                  key={index}
                >
                  {option}
                </option>
              );
            })}
          </select>
          <label className={classes.inputlabel}>Your Marks</label>
          <p className={classes.errormsg}>{formErrors.Marks}</p>
          <input
            placeholder="Enter your Marks"
            type="number"
            name="Marks"
            min="50"
            max="1100"
            value={userData.Marks}
            onChange={inputHandler}
          />
          <div className={classes.btnContainer}>
            <Button onClickFunc={submitForm} btnTitle="Submit" />
            <Button onClickFunc={props.onClose} btnTitle="Close" />
            <Button onClickFunc={OnEdit} btnTitle="Edit" />
          </div>
        </form>
      </div>
    </Modal>
  );
}
