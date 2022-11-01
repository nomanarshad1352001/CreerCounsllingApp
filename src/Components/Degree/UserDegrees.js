import React from "react";
import Intro from "../Introduction/Intro.js";
import classes from "../Degree/degree.module.css";
import { useNavigate } from "react-router-dom";

export default function UserDegrees(props) {
  const navigate = useNavigate();
  const Length = props.Degrees.filter((deg) =>
    props.Condition.includes(deg.name)
  ).length;
  return (
    <React.Fragment>
      <div className={classes.mainHeading}>
        <h2 className={classes.title}>{props.Title}</h2>
        <h3 className={classes.length}>Total Degrees: {Length}</h3>
      </div>
      <div className={classes.container}>
        {props.Degrees.filter((deg) => props.Condition.includes(deg.name)).map(
          (Deg) => {
            return (
              <Intro
                Check={true}
                btnTitle={"Colleges"}
                onClickFunc={() =>
                  navigate("/Fclg", {
                    state: {
                      selected_Title: Deg.name,
                      Check:true
                    },
                  })
                }
                btnTitle1="More"
                onClickFunc1={() =>
                  navigate("/seemore", {
                    state: {
                      selected_Id: Deg.id,
                      selected_Title: Deg.name,
                      selected_subTitle: Deg.subName,
                      selected_Description: Deg.description,
                      selected_Image: Deg.img,
                    },
                  })
                }
                btnTitle2="Jobs"
                onClickFunc2={() =>
                  navigate("/Jobs", {
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
