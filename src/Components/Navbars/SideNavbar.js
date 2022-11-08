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
        
        <ul>
        <li>
            <Link to="/">
              <i><AiFillHome/></i>
             <span className="tooltip">Home</span>
            </Link>
          </li>
         <li>
           <Link to="degree">
             <i ><IoIosSchool/></i>
           <span className="tooltip">Degrees</span>
             </Link>
         </li>
         <li>
           <Link to="colleges">
             <i><FaUniversity/></i>
           <span className="tooltip">Colleges</span>
             </Link>
         </li>
          <li>
            <Link to="about">
              <i><FaUserFriends/></i>
             <span className="tooltip">About Us</span>
            </Link>
          </li>
          <li>
           <Link to="contact">
             <i><MdContactMail/></i>
           <span className="tooltip">Contact</span>
            </Link>
         </li>
         <li>
           <Link to="admin">
             <i><MdAdminPanelSettings/></i>
           <span className="tooltip">Admin</span>
             </Link>
         </li>
        </ul>
      </div>
    </div>
  )
}
