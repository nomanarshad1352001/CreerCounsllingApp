import React from 'react';
import clasess from './SideNavbar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Card } from '@mui/material';
export default function SideNavbar() {
  return (
    <Card>
 <nav><div className={clasess.SideNavbar}>
  <Card>
    <div className={clasess.menue}>Menue</div>
  </Card>
    <ul>
     <li> <HomeIcon/> Home</li>
      <li><SupervisorAccountIcon/> About Us</li>
      <li> <AdminPanelSettingsIcon/> Admin</li>
      <li><ContactsIcon/> Contact Us</li>
    </ul>
   </div></nav>
    </Card>
   
   
  );
}
