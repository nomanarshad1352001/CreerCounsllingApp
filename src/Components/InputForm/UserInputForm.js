import classes from "./InputForm.module.css";
import React, { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button.js";
export default function UserInputForm(props) {
  const options = [' Matric Science(com)', 'Matric Science(bio)', 'Matric Arts', 'FSC(Pre Engineering)', 'FSC(Pre Medical)', 'ICS(Physics)', 'ICS(Stastics)', 'ICS(Economics)', 'ICOM'];
  const [name, setName] = useState("");
  const [passedDegree, setpassedDegree] = useState("Matric Science(com)");
  const [marks, setMarks] = useState("");
  const [userData, setuserData] = useState()
  const [EditingState, setEditingState] = useState(false);
    const inputNameHandler = (event) => {
      setName(event.target.value);
    };
    const inputpassedDegreeHandler = (event) => {
      setpassedDegree(event.target.value);
    };
    const inputMarksHandler = (event) => {
      setMarks(event.target.value);
    };

    const submitForm = (event) => {
      event.preventDefault();
      console.log(userData);
      if (Edit === true) {
        setuserData ( {
          Name: name,
          PassedDegree: passedDegree,
          Marks: marks,
        })
        setName('');
        setpassedDegree('');
        setMarks('');
        setEdit(false);
        console.log(userData);
      } else {
        setuserData ( {
          Name: name,
          PassedDegree: passedDegree,
          Marks: marks,
        })
        setName('');
      setpassedDegree('');
      setMarks('');
      }
    };
    const OnEdit = (event) => {
      event.preventDefault();
      setEdit(true);
      setName(userData.Name);
      setpassedDegree(userData.PassedDegree);
      setMarks(userData.Marks);
    };
    return (
      <Modal onClickFunc={props.onClose}>
        <div className={classes.heading}>
          <h3>Enter the Data</h3>
        </div>
        <form>
          <label>Name</label>
          <input placeholder="Enter your name"
              type="text"
              name="name" value={name} onChange={inputNameHandler} />
          <label>Passed Degree</label>
          <select
            onChange={inputpassedDegreeHandler}
          >
            {options.map((option, index) => {
              return <option defaultValue='Matric Science(com)'
                value={options.value} key={index} >
                {option}
              </option>
            })}
          </select>
          <label>Your Marks</label>
          <input placeholder="Enter your name"
              type="text"
              name="marks" value={marks} onChange={inputMarksHandler} />
          <div className={classes.btnContainer}>
            <Button onClickFunc={submit} btnTitle="Submit" />
            <Button onClickFunc={props.onClose} btnTitle="Close" />
            <Button onClickFunc={OnEdit} btnTitle="Edit" />
          </div>
        </form>
      </Modal>
    );
  }
