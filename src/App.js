import clasess from "./App.module.css";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Admin from "./Components/Admin/Admin.js";
import Header from "./Components/Navbars/Header.js";
import Contact from './Components/Contact/Contact.js'
// import Footer from './Components/Footer.js'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNavbar from "./Components/Navbars/SideNavbar.js";
import UserInputForm from "./Components/InputForm/UserInputForm";
import Degree from "./Components/Degree/Degree";
import Colleges from "./Components/Colleges/Colleges";
function App(props) {
  const [FormIsShown, setFormIsShown] = useState(false)
  const ShowFormFun=()=>{
    setFormIsShown(true);
  }
  const HideFormFun=()=>{
    setFormIsShown(false);
  }
  
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className={clasess.container}>
          <div className={clasess.item1}>
            <Header />
          </div>
          <div className={clasess.item2}>
            <SideNavbar />
          </div>
          <div className={clasess.item3}>
          { FormIsShown && <UserInputForm onClose={HideFormFun}/>}
          <Routes>
          <Route path="/" element={<Home OnClick={ShowFormFun}/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/colleges" element={<Colleges/>} />
          <Route path="/degree" element={<Degree/>} />
        </Routes>
          </div>
        </div>
        {/* <Footer/> */}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
