import React from "react";

const DataContext = React.createContext({
  Degrees: [],
  UserData:{},
  colleges:[],
  IsLoggedIn:false,
});
export default DataContext;
