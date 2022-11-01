import React, {useContext} from "react";
import Intro from "../Introduction/Intro";
import DataContext from "../../Store/data-context";
import classes from "./Colleges.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../UI/Button";

export default function FilteredColleges() {
    const navigate = useNavigate();
    const Location = useLocation();
    const ctx = useContext(DataContext);
    const FilteredClg = ctx.Colleges.filter((clg, index) => clg.degreeAvailable.includes(Location.state.selected_Title));
const goBack=()=>{
    navigate("/Fdegree")
}
    return (
        <React.Fragment><div className={classes.mainHeading}>
        <h2 className={classes.title}> Available Colleges for {Location.state.selected_Title}</h2>
        <h3 className={classes.length}>Total Colleges: {FilteredClg.length}</h3>
      </div>
           <div className={classes.container}>
                {FilteredClg.map((clg) => {
                    return (
                        <Intro
                            btnTitle={"More"}
                            onClickFunc={() =>
                                navigate("/seemore", {
                                    state: {
                                        selected_Id: clg.id,
                                        selected_Title: clg.Title,
                                        selected_subTitle: clg.subTitle,
                                        selected_Description: clg.description,
                                        selected_Image: clg.img ,
                                        selected_Button:clg.Subjects
                                    },
                                })
                            }
                            key={clg.id}
                            image={clg.img}
                            Title={clg.Title}
                            subTitle={clg.subTitle}
                            description={clg.description}
                        />
                    );
                })}
            </div>
            <div className={classes.btnContainer}>
           {Location.state.Check && <Button btnTitle="Go Back" onClickFunc={goBack}/>} 
            </div>
        </React.Fragment>
    );
}
