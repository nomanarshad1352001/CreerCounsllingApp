import React, { useState } from "react";
import FormInput from "./FormInput";
import classes from "./login.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import loginimg from "../Material/log.png";
const Login = (props) => {
  const navigate = useNavigate();
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
    navigate("/home");
    setValues({
      email: "",
      password: "",
    });
  };
  return (
    <div className={classes.main}>
      <div className={classes.loginMain}>
      <h1>Log in to your account</h1>
        <div className={classes.login}>
          <img src={loginimg} alt="login_image" />
          <div>
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
                <Button
                  onClickFunc={setValues}
                  btnTitle="Login"
                  padding="13px"
                  color="brown"
                />
              </div>
            </form>
            <hr></hr>
          </div>
        </div>
        <div className={classes.link}>
          <p className={classes.para}>New to Career & Degree Counselling?</p>
          <a className={classes.spanlink} href={"./signup"}>
            <span>Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
