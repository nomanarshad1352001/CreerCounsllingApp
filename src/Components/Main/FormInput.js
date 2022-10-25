import React,{ useState } from "react";
import classes from "./forminput.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={classes.formInput}>
      <label className={classes.loginlabel}>{label}</label>
      <input className={classes.input}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className={classes.span}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;