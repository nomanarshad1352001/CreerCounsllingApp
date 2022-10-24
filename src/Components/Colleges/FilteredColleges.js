import React, {useContext} from "react";
import Intro from "../Introduction/Intro";
import DataContext from "../../Store/data-context";
import classes from "./FilterClg.module.css";
import {useLocation, useNavigate} from "react-router-dom";

export default function FilteredColleges() {
    const navigate = useNavigate();
    const Location = useLocation();
    const ctx = useContext(DataContext);
    const FilteredClg = ctx.Colleges.filter((clg, index) => clg.degreeAvailable.includes(Location.state.selectedDegName));

    return (
        <React.Fragment>
            <div className={classes.mainHeading}>
                <h4 className={classes.title}>
                    {" "}
                    Available Colleges for your Selected Degree
                </h4>
            </div>

            <div className={classes.container}>
                {FilteredClg.map((clg) => {
                    return (
                        <Intro
                            btnTitle={"See more"}
                            onClickFunc={() =>
                                navigate("/seemore", {
                                    state: {
                                        selectedclgId: clg.id,
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
        </React.Fragment>
    );
}
