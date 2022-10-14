import clasess from "./App.module.css";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Admin from "./Components/Admin/Admin.js";
import Header from "./Components/Navbars/Header.js";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNavbar from "./Components/Navbars/SideNavbar.js";
function App() {
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
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>
          </div>
          <div className={clasess.item4}></div>
        </div>
        
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
