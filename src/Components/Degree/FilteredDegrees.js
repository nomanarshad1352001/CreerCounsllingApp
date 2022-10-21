import React, { useContext } from "react";
import DataContext from "../../Store/data-context";
import UserDegrees from "./UserDegrees";
import classes from './Filter.module.css'
import Button from "../UI/Button";
export default function FilteredDegrees(props) {
  const ctx = useContext(DataContext);
  const availableCLG=()=>{
console.log("nouman");
  }
  var element;
  if (ctx.UserData.PassedDegree === "Matric Science(com)") {
    element = (<UserDegrees
      Title="Your Degrees Acording to Matric Science(com)"
      UserData={ctx.UserData}
      Check="Matric Science(com)"
      Degrees={ctx.InterDegrees}
      Condition={[
        "FSC(Pre-Engineering)",
        "",
        "ICS(Physics)",
        "ICS (Statistics)",
        "ICS (Economics)",
        "ICom",
      ]}
      onClickCLG={availableCLG}
    />)
  } else if (ctx.UserData.PassedDegree === "Matric Science(bio)") {
    element = (<UserDegrees
      Title="Your Degrees Acording to Matric Science(bio)"
      UserData={ctx.UserData}
      Check="Matric Science(bio)"
      Degrees={ctx.InterDegrees}
      Condition={[
        "FSC(Pre-Engineering)",
        "FSC(Pre-Medical)",
        "ICS(Physics)",
        "ICS (Statistics)",
        "ICS (Economics)",
        "ICom",
      ]}
      onClickCLG={availableCLG}
    />)
  } else if (ctx.UserData.PassedDegree === "Matric Arts") {
    element = (<UserDegrees
      Title="Your Degrees Acording to Matric Arts"
      UserData={ctx.UserData}
      Check="Matric Arts"
      Degrees={ctx.InterDegrees}
      Condition={[
        "",
        "",
        "",
        "ICS (Statistics)",
        "ICS (Economics)",
        "ICom",
      ]}
      onClickCLG={availableCLG}
    />)
  }
  const Check = element === undefined ? true : false;
  return (
    <React.Fragment>
      {Check === true && (
        <div>
          {" "}
          <div className={classes.title}>Please Enter Your Data</div>
          <div className={classes.btn}>
            <Button btnTitle="Your Info" onClickFunc={props.OnClick} />
          </div>
          </div>
      )}
          {element}
          {Check === false && 
          <div className={classes.btn}>  
           <Button btnTitle="Check More" onClickFunc={props.OnClick} />
           </div>
          }
        </React.Fragment>
      );
}
