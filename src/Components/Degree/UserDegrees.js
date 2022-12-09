import React from "react";
import Intro from "../Introduction/Intro.js";
import classes from "../Degree/degree.module.css";
import { useNavigate } from "react-router-dom";
// import degree from "../Material/engineering.jpg"

export default function UserDegrees(props) {
  const navigate = useNavigate();
  const Length = props.Degrees.filter((deg) =>
    props.Condition.includes(deg.name)
  ).length;
  return (
    <React.Fragment>
      <div className={classes.Maincontainer}>
      <div className={classes.mainHeading}>
        <h2 className={classes.title}>{props.Title}</h2>
        <h3 className={classes.length}>Total Degrees: {Length}</h3>
      </div>
      <div className={classes.container}>
        {props.Degrees.filter((deg) => props.Condition.includes(deg.name)).map(
          (Deg) => {
            return (
              <Intro
              padding="10px"
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
                      selected_name: Deg.name,
                    },
                  })
                }
                key={Deg.id}
                image={Deg.selectedFile}
                Title={Deg.name}
                subTitle={Deg.subName}
                description={Deg.description}
              />
            );
          }
        )}
      </div>
      </div>
    </React.Fragment>
  );
}
