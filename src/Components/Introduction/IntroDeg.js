import React, { Fragment } from 'react';
import classes from './IntroDeg.module.css';
import careerimg from '../Material/career-words.jpg'
const IntroDeg = () => {
  return (
    <Fragment>
        <header className={classes.header}>
        <h1>Introduction</h1>
      </header>
      <h2 className={classes.degname}>Matric</h2>
      {/* <div className={classes['main-image']}>
        <img src={careerimg} alt='A table full of delicious food!' />
      </div> */}
    </Fragment>
  );
};

export default IntroDeg;