import React, {useContext} from "react";
import { Navigate, Outlet } from 'react-router-dom';
import DataContext from "../Store/data-context";
const useAuth=()=>{
    const ctx = useContext(DataContext);
    const user = {loggedIn :ctx.IsLoggedIn}
    return user && user.loggedIn;
};
export default function ProtectedRoutes() {
    const isAuth =useAuth();
  return isAuth ? <Outlet/> : <Navigate to="/mainPage" />
};
