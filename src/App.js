import React, { useEffect } from "react";
import Controls from "./Components/Controls/Controls.js";

import {useDispatch} from 'react-redux';
import {getColleges} from './actions/colleges';
// import {getDegrees} from './actions/degrees';
// console.log(getDegrees);
function App(props) {

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getColleges());
  // dispatch(getDegrees());
},[dispatch])

  return (
    <React.Fragment>
      <Controls />
    </React.Fragment>
  );
}
export default App;
