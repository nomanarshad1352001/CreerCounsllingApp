import React from "react";

const DataContext = React.createContext({
  Degrees: [],
  UserData:{},
  Colleges:[],
  IsLoggedIn:false,
});
export default DataContext;
