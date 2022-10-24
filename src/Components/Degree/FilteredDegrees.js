import React, {useContext} from "react";
import DataContext from "../../Store/data-context";
import UserDegrees from "./UserDegrees";
import classes from './Filter.module.css'
import Button from "../UI/Button";

export default function FilteredDegrees(props) {
    const ctx = useContext(DataContext);
    var element;

    var DegreesList = [

        {
            degree: "Matric Science(com)",
            title: "Your Degrees Acording to Matric Science(com)",
            conditions: [
                "FSC(Pre-Engineering)",
                "ICS(Physics)",
                "ICS (Statistics)",
                "ICS (Economics)",
                "ICom",
            ]
        },
        {
            degree: "Matric Science(bio)",
            title: "Your Degrees Acording to Matric Science(bio)",
            conditions: [
                "FSC(Pre-Engineering)",
                "FSC(Pre-Medical)",
                "ICS(Physics)",
                "ICS (Statistics)",
                "ICS (Economics)",
                "ICom",
            ]
        },
        {
            degree: "Matric Arts",
            title: "Your Degrees Acording to Matric Arts",
            conditions: [
                "ICS (Statistics)",
                "ICS (Economics)",
                "ICom",
            ]
        },
        {}
    ]


    let applicableDegree = DegreesList.find(deg => deg.degree === ctx.UserData.PassedDegree)
    if(applicableDegree !== undefined) {
        element = (
            <>
                <UserDegrees
                    Title={applicableDegree.title}
                    UserData={ctx.UserData}
                    Check={applicableDegree.title.degree}
                    Degrees={ctx.InterDegrees}
                    Condition={applicableDegree.conditions}
                />
                <div className={classes.btn}>
                    <Button btnTitle="Check More" onClickFunc={props.OnClick}/>
                </div>
            </>
        )
    }
    return (
        <React.Fragment>
            {!applicableDegree ? (
                <div>
                    {" "}
                    <div className={classes.title}>No Degrees available against your Passed Degre.</div>
                    <div className={classes.btn}>
                        <Button btnTitle="Your Info" onClickFunc={props.OnClick}/>
                    </div>
                </div>
            ) : element}
        </React.Fragment>
    );
}
