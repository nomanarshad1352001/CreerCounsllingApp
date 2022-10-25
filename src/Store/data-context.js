import React from "react";

const DataContext = React.createContext({
  MatricDegrees: [],
  InterDegrees: [],
  BsDegrees: [],
  UserData:{},
  colleges:[],
  IsLoggedIn:false,
});
export default DataContext;
