import React, { useState } from "react";
import FormInput from "../Main/FormInput";
import classes from "./login.module.css";
const login = (props) => {

  const [values, setValues] = useState({
    email: "",
    password: "",
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
  };
  return (
    <div className={classes.main}>
      <div className={classes.login}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <h1 className={classes.H1}>Log in to your account</h1>
            <div className={classes.inputs}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
          </div>
          <div className={classes.loginBtn}>
            <button className={classes.Btn} onClick={setValues}>Log In</button>
          </div>
        </form>
        <hr></hr>
        <div className={classes.link}>
          <p className={classes.para}>New to Career & Degree Counselling?</p>
          <a className={classes.spanlink} href={"./"}  >
            <span>Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default login