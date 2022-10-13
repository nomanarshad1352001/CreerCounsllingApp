import React from "react";
import clasess from "./SideNavbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
export default function SideNavbar() {
  return (
    <div className={clasess.SideNavbar}>
      {" "}
      <div className={clasess.item1}>
        <div className={clasess.menue}>Menue</div>
        <ul>
          <li>
            {" "}
            <HomeIcon /> Home
          </li>
          <li>
            <SupervisorAccountIcon /> About Us
          </li>
          <li>
            {" "}
            <AdminPanelSettingsIcon /> Admin
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
  );
}
