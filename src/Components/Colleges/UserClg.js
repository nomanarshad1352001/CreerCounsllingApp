import React from 'react'

export default function UserClg() {
  return (
    <React.Fragment>
      <h4 className={classes.title}> {props.Title}</h4>
      <div className={classes.container}>
        {props.Colleges.map((clg, index) => {
          if (clg.degreeAvailable[index] === props.Condition)
            return (
              <Intro
                btnTitle={ "See more about this College"}
                // onClickFunc={() =>
                //   navigate("/Fclg", {
                //     state: {
                //       selectedDegName: Deg.name,
                //     },
                //   })
                // }
                key={clg.id}
                image={clg.img}
                Title={clg.name}
                subTitle={clg.subName}
                description={clg.description}
              />
            );
        })}
      </div>
  </React.Fragment>
  )
}
