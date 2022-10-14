import React from "react";
import { Link } from "react-router-dom";
import clasess from "./SideNavbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { color } from "@mui/system";

export default function SideNavbar() {
  return (
    <React.Fragment>
      <div className={clasess.SideNavbar}>
        {" "}
        <div className={clasess.item1}>
          <div className={clasess.menue}>Menue</div>
          <ul>
            <li>
              {" "}
              <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}} >
                <HomeIcon /> Home
              </Link>
            </li>
            <li>
              <Link to="about" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <SupervisorAccountIcon /> About Us
              </Link>
            </li>
            <li>
              {" "}
              <Link to="admin" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <AdminPanelSettingsIcon /> Admin
              </Link>
            </li>
            <li>
              <ContactsIcon /> Contact Us
            </li>
          </ul>
        </div>
        <div className={clasess.item2}>
          <h3>Nouman</h3>
        </div>
      </div>
    </React.Fragment>
  );
}
