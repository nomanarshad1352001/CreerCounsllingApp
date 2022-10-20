import React, { useContext, useState } from "react";
import DataContext from "../../Store/data-context";
import UserDegrees from "./UserDegrees";
import classes from './Filter.module.css'
import Button from "../UI/Button";
export default function FilteredDegrees(props) {
  const [Check, setCheck] = useState(true)
  const ctx = useContext(DataContext);
  return (
    <React.Fragment>
      {Check === false && (
        <div>
          {" "}
          <div className={classes.title}>Please Enter Your Data</div>
          <div className={classes.btn}>
            <Button btnTitle="Your Info" onClickFunc={props.onclick} />
          </div>
        </div>
      )}
      <UserDegrees 
      Title="Your Degrees Acording to FSC(Pre-Engineering)"
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
      />
      <UserDegrees 
      Title="Your Degrees Acording to FSC(Pre-Medical)"
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
      />
    </React.Fragment>
  );
}
