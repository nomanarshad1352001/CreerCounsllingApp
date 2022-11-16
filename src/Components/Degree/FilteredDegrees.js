import React, { useContext } from "react";
import DataContext from "../../Store/data-context";
import UserDegrees from "./UserDegrees";
import classes from "./degree.module.css";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import NoData from "../Material/no.jpg"
export default function FilteredDegrees(props) {
  const navigate = useNavigate();
  const ctx = useContext(DataContext);
  var element;

  var DegreesList = [
    {
      degreeName: "Matric Science(com)",
      title: "Your Degrees Acording to Matric Science(com)",
      conditions: [
        "FSC(Pre-Engineering)",
        "ICS(Physics)",
        "ICS (Statistics)",
        "ICS (Economics)",
        "ICom",
      ],
    },
    {
      degreeName: "Matric Science(bio)",
      title: "Your Degrees Acording to Matric Science(bio)",
      conditions: [
        "FSC(Pre-Engineering)",
        "FSC(Pre-Medical)",
        "ICS(Physics)",
        "ICS (Statistics)",
        "ICS (Economics)",
        "ICom",
      ],
    },
    {
      degreeName: "Matric Arts",
      title: "Your Degrees Acording to Matric Arts",
      conditions: ["ICS (Statistics)", "ICS (Economics)", "ICom"],
    },
    {
      degreeName: "FSC(Pre Engineering)",
      title: "Your Degrees Acording to FSC(Pre Engineering)",
      conditions: [
        "BS (BBA)",
        "BS Chemistry (Pre-Engineering)",
        "BS Mass Communication",
        "BS English",
        "BS Education",
        "BS Computer Science",
        "BS Mathematics",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Geography",
      ],
    },
    {
      degreeName: "FSC(Pre Medical)",
      title: "Your Degrees Acording to FSC(Pre Medical)",
      conditions: [
        "BS (BBA)",
        "BS (Botany)",
        "BS Chemistry (Pre-Medical)",
        "BS Chemistry (Pre-Engineering)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Zology",
        "BS Geography",
      ],
    },
    {
      degreeName: "ICS(Physics)",
      title: "Your Degrees Acording to ICS(Physics)",
      conditions: [
        "BS (BBA)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Computer Science",
        "BS Mathematics",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Geography",
      ],
    },
    {
      degreeName: "ICS(Stastics)",
      title: "Your Degrees Acording to ICS(Stastics)",
      conditions: [
        "BS (BBA)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Computer Science",
        "BS Mathematics",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Geography",
      ],
    },
    {
      degreeName: "ICS(Economics)",
      title: "Your Degrees Acording to ICS(Economics)",
      conditions: [
        "BS (BBA)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Computer Science",
        "BS Mathematics",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Geography",
      ],
    },
    {
      degreeName: "ICOM",
      title: "Your Degrees Acording to ICOM",
      conditions: [
        "BS (BBA)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Geography",
      ],
    },
  ];

  let applicableDegree = DegreesList.find(
    (deg) => deg.degreeName === ctx.UserData.PassedDegree
  );
  if (applicableDegree !== undefined) {
    element = (
      <>
        <UserDegrees
        Length={applicableDegree.Length}
          Title={applicableDegree.title}
          UserData={ctx.UserData}
          Degrees={ctx.Degrees}
          Condition={applicableDegree.conditions}
        />
        <div className={classes.btn}>
          <Button color="#ff4e22" btnTitle="Check More" onClickFunc={props.OnClick} />
        </div>
      </>
    );
  }
  return (
    <React.Fragment>
      {!applicableDegree ?
      (
        <div className={classes.WhenEmpty}>
            <img src={NoData} alt="img" />
            <h4 className={classes.Title}>
              No Degrees available against your Passed Degre.
            </h4>
          <div className={classes.btn}>
            <Button color="#ff4e22" btnTitle="Go to Home" onClickFunc={()=>{ navigate("/home")}} />
          </div>
        </div>
      ) 
      : (
        element
      )}
    </React.Fragment>
  );
}
