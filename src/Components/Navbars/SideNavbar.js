import React from "react";
import { Link } from "react-router-dom";
import {AiFillProfile,AiFillHome,AiFillContacts} from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import './SideNavbar.css';

export default function SideNavbar() {
      // let sidebar = document.querySelector(".sidebar");
      // let closeBtn = document.querySelector("/btn");
      // let searchBtn = document.querySelector(".bx-search");
    
      // closeBtn.addEventListener("click", ()=>{
      //   sidebar.classList.toggle("open");
      //   menuBtnChange();//calling the function(optional)
      // });
    
      // searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
      //   sidebar.classList.toggle("open");
      //   menuBtnChange(); //calling the function(optional)
      // });
    
      // // following are the code to change sidebar button(optional)
      // function menuBtnChange() {
      //  if(sidebar.classList.contains("open")){
      //    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
      //  }else {
      //    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
      //  }
      // }
  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus icon'> <AiFillHome/></i>
          
            <div className="logo_name">
              <h4> CodingLab </h4></div>
            <i className='bx bx-menu' id="btn" ></i>
        </div>
        <ul className="nav-list">
        <li>
            <Link to="/">
              <i className='bx'><AiFillHome/></i>
            </Link>
             <span className="tooltip">Home</span>
          </li>
          <li>
            <Link to="about">
              <i className='bx'><AiFillProfile/></i>
            </Link>
             <span className="tooltip">About</span>
          </li>
          <li>
           <Link to="contact">
             <i className='bx'><AiFillContacts/></i>
            </Link>
           <span className="tooltip">Contact</span>
         </li>
         <li>
           <Link to="admin">
             <i className='bx' ><MdAdminPanelSettings/></i>
             </Link>
           <span className="tooltip">Admin</span>
         </li>
         <li>
           <Link to="">
             <i className='bx' ></i>
             </Link>
           <span className="tooltip">Analytics</span>
         </li>
        </ul>
      </div>
    </div>
  )
}
