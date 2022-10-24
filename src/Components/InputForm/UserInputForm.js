import classes from "./InputForm.module.css";
import React, {useState, useEffect} from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button.js";
import {useNavigate} from "react-router-dom";

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

    const [userData, setuserData] = useState({
        Name: "",
        PassedDegree: "",
        Marks: "",
    });

    const [formErrors, setformErrors] = useState({})

    const inputHandler = (event) => {
        const {name, value} = event.target;
        setuserData({
            ...userData,
            [name]: value,
        });
    }

    const submitForm = (event) => {
        event.preventDefault();

        props.setUser(userData);

        let errors = Validate(userData)
        if(!errors.isSuccess) {
            setformErrors(errors)
            return false;
        }

        setuserData({
            Name: "",
            PassedDegree: "",
            Marks: "",
        });
        navigate('/Fdegree');
    };
    const Validate = (values) => {

        const errors = {};

        if (!values.Name)
            errors.Name = "UserName is Required";
        if (values.PassedDegree === "--select your degree--" || values.PassedDegree === "")
            errors.PassedDegree = "PassedDegree is required";
        if (!values.Marks)
            errors.Marks = "Marks is Required";
        else if(values.Marks < 50 || values.Marks > 1100)
            errors.Marks = "Marks must be between 50 and 1100.";

        errors.isSuccess = !errors.Name && !errors.PassedDegree && !errors.Marks

        return errors;
    }

    return (
        <Modal onClickFunc={props.onClose}>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <h3>Enter the Data</h3>
                </div>
                <form onSubmit={submitForm}>
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
                    <select onChange={inputHandler} name="PassedDegree" value={userData.PassedDegree}>
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
                        value={userData.Marks}
                        onChange={inputHandler}
                    />
                    <div className={classes.btnContainer}>
                        <Button btnTitle="Submit"/>
                        <Button onClickFunc={props.onClose} btnTitle="Close"/>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
