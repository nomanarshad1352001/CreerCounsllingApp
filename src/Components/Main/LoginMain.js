import Button from "../UI/Button.js";
import React, { useState } from "react";
import FormInput from "./FormInput";
import classes from "./LoginMain.module.css";
import {useNavigate} from "react-router-dom";
const App = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    // {
    //   id: 1,
    //   name: "username",
    //   type: "text",
    //   placeholder: "Username",
    //   errorMessage:
    //     "Username should be 3-16 characters and shouldn't include any special character!",
    //   label: "Username",
    //   pattern: "^[A-Za-z0-9]{3,16}$",
    //   required: true,
    // },
    // {
    //   id: 2,
    //   name: "email",
    //   type: "email",
    //   placeholder: "Email",
    //   errorMessage: "It should be a valid email address!",
    //   label: "Email",
    //   required: true,
    // },
    // {
    //     id: 3,
    //     name: "birthday",
    //     type: "date",
    //     placeholder: "Birthday",
    //     label: "Birthday",
    // },
    // {
    //     id: 4,
    //     name: "password",
    //     type: "password",
    //     placeholder: "Password",
    //     errorMessage:
    //         "Password should be 3-20 characters and include at least 1 letter, 1 number and 1 special character!",
    //     label: "Password",
    //     pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,20}$`,
    //     required: true,
    // },
    // {
    //     id: 5,
    //     name: "confirmPassword",
    //     type: "password",
    //     placeholder: "Confirm Password",
    //     errorMessage: "Passwords don't match!",
    //     label: "Confirm Password",
    //     pattern: values.password,
    //     required: true,
    // },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUserLoginData(values);
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
      <div className={classes.login}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <h1 className={classes.H1}>Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className={classes.loginBtn}>
            <Button btnTitle="Submit" />
            <Button btnTitle="close" onClickFunc={props.onCloseLogin} />
          </div>
        </form>
      </div>
  );
};

export default App;
