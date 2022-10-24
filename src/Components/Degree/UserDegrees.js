import React from "react";
import Intro from "../Introduction/Intro.js";
import classes from "../Degree/degree.module.css";
import { useNavigate } from "react-router-dom";

export default function UserDegrees(props) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <h4 className={classes.title}> {props.Title}</h4>
      <div className={classes.container}>
        {props.Degrees.filter((i) => props.Condition.includes(i.name)).map(
          (Deg) => {
            return (
              <Intro
                btnTitle={"See Colleges"}
                onClickFunc={() =>
                  navigate("/Fclg", {
                    state: {
                      selected_Id: Deg.id,
                      selected_Title: Deg.name,
                      selected_subTitle: Deg.subName,
                      selected_Description: Deg.description,
                      selected_Image: Deg.img,
                    },
                  })
                }
                key={Deg.id}
                image={Deg.img}
                Title={Deg.name}
                subTitle={Deg.subName}
                description={Deg.description}
              />
            );
          }
        )}
      </div>
    </React.Fragment>
  );
}
