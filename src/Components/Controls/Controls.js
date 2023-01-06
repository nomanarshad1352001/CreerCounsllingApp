import { useSelector } from "react-redux";
import React, { useState,useRef, useEffect} from "react";
import clasess from "./Controls.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Navbars/Header";
import SideNavbar from "../Navbars/SideNavbar";
import UserInputForm from "../InputForm/UserInputForm";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Colleges from "../Colleges/Colleges";
import Degree from "../Degree/Degree";
import Admin from "../Admin/Admin";
import DataContext from "../../Store/data-context";
import FilteredDegrees from "../Degree/FilteredDegrees";
import FilteredColleges from "../Colleges/FilteredColleges";
import MainPage from "../Main/MainPage";
import Seemore from "../SeeMore/Seemore.js";
import ProtectedRoutes from "../ProtectedRoutes";
import Footer from "../Footer.js";
import Login from "../Auth/login.js";
import SignUp from "../Auth/signup.js";
import img from "../Material/img2-01.png";
import back from "../Material/background.png";


let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

export default function Controls() {
  const [FormIsShown, setFormIsShown] = useState(false);
  const [UserSignUpData, setUserSignUpData] = useState({});
  const [UserLoginData, setUserLoginData] = useState({});
  const [IsLoggedIn, setIsLoggedIn] = useState(true);
  const [IsNavbarShow, setIsNavbarShow] = useState(false);
  const [User, setUser] = useState({
    Name: "",
    PassedDegree: "",
    Marks: "",
  });
  const ShowInputFormFun = () => {
    setFormIsShown(true);
  };
  const HideInputFormFun = () => {
    setFormIsShown(false);
  };
  const colleges = useSelector((state)=>state.colleges);
  const Degrees = useSelector((state)=>state.degrees);
  return (
    <DataContext.Provider
      value={{
        Degrees: Degrees,
        UserData: User,
        Colleges: colleges,
        IsLoggedIn: IsLoggedIn,
        UserLoginData: UserLoginData,
        UserSignUpData: UserSignUpData,
      }}
    >
      <BrowserRouter>
        <div className={clasess.container}>
          <div className={clasess.item1}>
            <Header
              IsLoggedIn={IsLoggedIn}
              IsNavbarShow={IsNavbarShow}
              setIsNavbarShow={setIsNavbarShow}
              setIsLoggedIn={setIsLoggedIn}
            />
            <img className={clasess.back}src={back} alt="top" />
            <img  className={clasess.topback} src={img} alt="top" />
          </div>
          <div
            style={IsNavbarShow ? { marginLeft: 75 + "px" } : {}}
            className={clasess.item2}
          >
            {IsNavbarShow && (
              <div>
                {IsLoggedIn && <SideNavbar useClickOutside={useClickOutside} setIsNavbarShow={setIsNavbarShow} />}
              </div>
            )}
            <div>
              {FormIsShown && (
                <UserInputForm
                  User={User}
                  setUser={setUser}
                  onClose={HideInputFormFun}
                />
              )}
              <Routes>
                <Route element={<ProtectedRoutes />}>
                  <Route
                    path="/home"
                    element={<Home OnClick={ShowInputFormFun} />}
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/colleges" element={<Colleges />} />
                  <Route path="/degree" element={<Degree />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/Fclg" element={<FilteredColleges />} />
                  <Route path="/seemore" element={<Seemore />} />
                  <Route
                    path="/Fdegree"
                    element={<FilteredDegrees OnClick={ShowInputFormFun}/>}
                  />
                </Route>
                <Route path="/" element={<MainPage />} />
                <Route
                  path="/signup"
                  element={<SignUp setUserSignUpData={setUserSignUpData} />}
                />
                <Route
                  path="/login"
                  element={
                    <Login
                      setUserLoginData={setUserLoginData}
                      IsLoggedIn={IsLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
          <div
            // style={IsNavbarShow ? { marginLeft: 85 + "px" } : {}}
            className={clasess.item3}
          >
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

