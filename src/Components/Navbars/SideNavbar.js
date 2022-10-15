
// export default function SideNavbar() {
//   return (
//     <React.Fragment>
//       <div className={clasess.SideNavbar}>
//         {" "}
//         <div className={clasess.item1}>
//           <div className={clasess.menue}>Menue</div>
//           <ul>
//             <li>
//               {" "}
//               <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}} >
//                 <HomeIcon /> Home
//               </Link>
//             </li>
//             <li>
//               <Link to="about" style={{ color: 'inherit', textDecoration: 'inherit'}}>
//                 <SupervisorAccountIcon /> About Us
//               </Link>
//             </li>
//             <li>
//               {" "}
//               <Link to="admin" style={{ color: 'inherit', textDecoration: 'inherit'}}>
//                 <AdminPanelSettingsIcon /> Admin
//               </Link>
//             </li>
//             <li>
//               <ContactsIcon /> Contact Us
//             </li>
//           </ul>
//         </div>
//         <div className={clasess.item2}>
//           <h3>Nouman</h3>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
import React from "react";
// import { Link } from "react-router-dom";
import {AiFillProfile,AiFillHome,AiFillContacts} from "react-icons/ai";

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
          <i className='bx bxl-c-plus-plus icon'></i>
            <div className="logo_name">
              <h4> CodingLab </h4></div>
            <i className='bx bx-menu' id="btn" ></i>
        </div>
        <ul className="nav-list">
          <li><a href="Admin">
              <i className='bx bx-search' ><AiFillHome/>
              </i>
              </a>
             <input type="text" placeholder="Home"/>
             <span className="tooltip">Home</span>
          </li>
          <li><a href="About">
              <i className='bx bx-search' ><AiFillProfile/>
              </i>
              </a>
             <input type="text" placeholder="About"/>
             <span className="tooltip">About</span>
          </li>
          <li>
           <a href="/">
             <i className='bx'><AiFillContacts/></i>
             <span className="links_name">Contact</span>
           </a>
           <span className="tooltip">Contact</span>
         </li>
         <li>
           <a href="/">
             <i className='bx bx-chat' ></i>
             <span className="links_name">Messages</span>
           </a>
           <span className="tooltip">Messages</span>
         </li>
         <li>
           <a href="/">
             <i className='bx bx-pie-chart-alt-2' ></i>
             <span className="links_name">Analytics</span>
           </a>
           <span className="tooltip">Analytics</span>
         </li>
         <li>
           <a href="/">
             <i className='bx bx-folder' ></i>
             <span className="links_name">File Manager</span>
           </a>
           <span className="tooltip">Files</span>
         </li>
        </ul>
      </div>
    </div>
  )
}
