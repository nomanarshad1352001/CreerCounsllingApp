import Button from "../UI/Button.js";
import React, { useState } from "react";
import FormInput from "../Main/FormInput";
import classes from "./signup.module.css";
import {useNavigate} from "react-router-dom";
const SignUp = (props) => {
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
      id: 1,
      name: "user Name",
      type: "text",
      placeholder: "User Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "User Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
        id: 3,
        name: "birthday",
        type: "date",
        placeholder: "Birthday",
        label: "Birthday",
    },
    {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
            "Password should be 3-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,20}$`,
        required: true,
    },
    {
        id: 5,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Passwords don't match!",
        label: "Confirm Password",
        pattern: values.password,
        required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUserSignUpData(values);
    props.setIsLoggedIn(true);
    setValues({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    });
    props.onCloseLogin();
    navigate("/")
  };
  return (
    <div  className={classes.signup}>
      <div className={classes.signup_content}>
            <h1 className={classes.H1}>Signup for Free</h1>
        <div className={classes.innercont}>
        <div className={classes.page_body}>
          <h2 className={classes.h3}><span></span> Free account</h2>
          <p>Create apps, connect databases and add-on services, and collaborate on your apps, for free.</p>
          
          <h2 className={classes.h3}><span></span> Your app platform</h2>
          <p>A platform for apps, with app management &amp; instant scaling, for development and production.</p>
          <hr></hr>
          <h2 className={classes.h3}><span></span> Deploy now</h2>
          <p>Go from code to running app in minutes. Deploy, scale, and deliver your app to the world.</p>
        </div>
        <div className={classes.login}>
          <form onSubmit={handleSubmit} className={classes.form}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className={classes.loginBtn}>
              <Button  color="#54BAB9"btnTitle="Submit" />
              <Button  color="#54BAB9" btnTitle="close" onClickFunc={props.onCloseLogin} />
            </div>
          </form>
        </div>
        </div>
      </div>
      </div>
  );
};

export default SignUp;
