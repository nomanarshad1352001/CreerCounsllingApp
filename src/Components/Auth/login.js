import Button from "../UI/Button.js";
import React, { useState } from "react";
import FormInput from "../Main/FormInput";
import classes from "./login.module.css";
import {useNavigate} from "react-router-dom";
const login = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 0,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
        id: 1,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
            "Password should be 3-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,20}$`,
        required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUserLoginData(values);
    props.setIsLoggedIn(true);
    setValues({
      email: "",
      password: "",
    });
    props.onCloseLogin();
    navigate("/")
  };
  return (
    <div className={classes.main}>
      <div className={classes.login}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <h1 className={classes.H1}>Sign In</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className={classes.loginBtn}>
            <Button  color="#00af3b" btnTitle="Submit" />
            <Button  color="red" btnTitle="close" onClickFunc={"../"} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default login