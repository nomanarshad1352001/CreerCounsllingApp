import React from "react";
import { Link } from "react-router-dom";
import {AiFillHome} from "react-icons/ai";
import { MdAdminPanelSettings,MdContactMail } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import {FaUniversity,FaUserFriends } from "react-icons/fa";
import './SideNavbar.css';

export default function SideNavbar() {
  return (
    <div>
      <div className="sidebar">
        
        <ul className="nav-list">
        <li>
            <Link to="/">
              <i><AiFillHome/></i>
            </Link>
             <span className="tooltip">Home</span>
          </li>
         <li>
           <Link to="degree">
             <i ><IoIosSchool/></i>
             </Link>
           <span className="tooltip">Degrees</span>
         </li>
         <li>
           <Link to="colleges">
             <i><FaUniversity/></i>
             </Link>
           <span className="tooltip">Colleges</span>
         </li>
          <li>
            <Link to="about">
              <i><FaUserFriends/></i>
            </Link>
             <span className="tooltip">About Us</span>
          </li>
          <li>
           <Link to="contact">
             <i><MdContactMail/></i>
            </Link>
           <span className="tooltip">Contact</span>
         </li>
         <li>
           <Link to="admin">
             <i><MdAdminPanelSettings/></i>
             </Link>
           <span className="tooltip">Admin</span>
         </li>
        </ul>
      </div>
    </div>
  )
}
