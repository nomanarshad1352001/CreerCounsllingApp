import React from "react";
import { Link } from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import { MdAdminPanelSettings,MdContactMail } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { FaUniversity,FaUserFriends } from "react-icons/fa";
import './SideNavbar.css';

export default function SideNavbar() {

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
           <Link to="degree">
             <i className='bx' ><IoIosSchool/></i>
             </Link>
           <span className="tooltip">Degrees</span>
         </li>
         <li>
           <Link to="colleges">
             <i className='bx' ><FaUniversity/></i>
             </Link>
           <span className="tooltip">Colleges</span>
         </li>
          <li>
            <Link to="about">
              <i className='bx'><FaUserFriends/></i>
            </Link>
             <span className="tooltip">About Us</span>
          </li>
          <li>
           <Link to="contact">
             <i className='bx'><MdContactMail/></i>
            </Link>
           <span className="tooltip">Contact</span>
         </li>
         <li>
           <Link to="admin">
             <i className='bx' ><MdAdminPanelSettings/></i>
             </Link>
           <span className="tooltip">Admin</span>
         </li>
        </ul>
      </div>
    </div>
  )
}
