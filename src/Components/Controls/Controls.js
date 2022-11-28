import React, { useState,useRef, useEffect} from "react";
import clasess from "./Controls.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Navbars/Header";
import SideNavbar from "../Navbars/SideNavbar";
import UserInputForm from "../InputForm/UserInputForm";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Colleges from "../Colleges/Colleges";
import Degree from "../Degree/Degree";
import Admin from "../Admin/Admin";
import DataContext from "../../Store/data-context";
import FilteredDegrees from "../Degree/FilteredDegrees";
import FilteredColleges from "../Colleges/FilteredColleges";
import MainPage from "../Main/MainPage";
import Seemore from "../SeeMore/Seemore.js";
import ProtectedRoutes from "../ProtectedRoutes";
import Footer from "../Footer.js";
import mcom from "../Material/mcom.png";
import Login from "../Auth/login.js";
import SignUp from "../Auth/Signup.js";
import img from "../Material/img2-01.png";
import back from "../Material/background.png";

let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

export default function Controls() {
  const [FormIsShown, setFormIsShown] = useState(false);
  const [UserSignUpData, setUserSignUpData] = useState({});
  const [UserLoginData, setUserLoginData] = useState({});
  const [IsLoggedIn, setIsLoggedIn] = useState(true);
  const [IsNavbarShow, setIsNavbarShow] = useState(false);
  const [User, setUser] = useState({
    Name: "",
    PassedDegree: "",
    Marks: "",
  });
  const ShowInputFormFun = () => {
    setFormIsShown(true);
  };
  const HideInputFormFun = () => {
    setFormIsShown(false);
  };
 let Degrees = [
    {
      id: "MScom",
      name: "Matric Science(com)",
      degType: "Metriculation",
      subName: "Faculty of O level education",
      description:
        "Metriculation in Computer Science helps learners develop an interest in computational thinking and an understanding of the principles of problem-solving using computers.",
      img: { mcom },
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "MSbio",
      name: "Matric Science(bio)",
      degType: "Metriculation",
      subName: "Faculty of O level education",
      description:
        "Metriculation in Biology helps learners to understand the biological world in which they live and take an informed interest in science and scientific developments.",
      img: "engineering.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "MArt",
      name: "Matric Arts",
      degType: "Metriculation",
      subName: "Faculty of O level education",
      description:
        "All those students who choose arts subjects have vast options for further studies. .",
      img: "engineering.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "FSCpe",
      name: "FSC(Pre-Engineering)",
      degType: "Intermediate",
      subName: "Faculty of Science in Pre Enginering.",
      description:
        "It is another option for science students after completing matriculation. It is the major",
      img: "./Material/engineering.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "FSCpm",
      name: "FSC(Pre-Medical)",
      degType: "Intermediate",
      subName: "Faculty of Science in Pre Medical.",
      description:
        "It is another option for science students after completing matriculation. It the major and primary step toward the best engineering fields",
      img: "Material/engineering.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "ICSp",
      name: "ICS(Physics)",
      degType: "Intermediate",
      subName: "Intermediate in computer sciences.",
      description:
        "It is another option for science students after completing matriculation. ",
      img: "Material/engineering.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "ICSs",
      name: "ICS (Statistics)",
      degType: "Intermediate",
      subName: "Faculty of Arts in colleges",
      description:
        "Statistics is the branch of Mathematics, working with analysis, and data collection. Statistics analysis first gather the data,",
      img: "engineering.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "ICSe",
      name: "ICS (Economics)",
      degType: "Intermediate",
      subName: "Faculty of arts in colleges",
      description:
        "Economics is a term used to summarize the data into the mathematical.Economics is the study of how people allocate scarce resources for production, ",
      img: "engineering.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "Icom",
      name: "ICom",
      degType: "Intermediate",
      subName: "Faculty of commerce in colleges",
      description:
        "I.COM program is particularly designed for Commerce degree. Basic concepts of commerce are induced in students who adopt the subject.",
      img: "engineering.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsbotany",
      name: "BS (Botany)",
      degType: "Graduation",
      subName: "Faculty of Biological Sciences.",
      description: "Botany is the scientific study of plantlife.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsbba",
      name: "BS (BBA)",
      degType: "Graduation",
      subName: "Faculty of Bussiness Admistration.",
      description:
        "Bachelor of Business Administration (BBA) is a bachelor's degree in business administration.",
      img: "./Material/bba.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bschemPE",
      name: "BS Chemistry (Pre-Engineering)",
      degType: "Graduation",
      subName: "Faculty of Chemistry.",
      description:
        "Chemical engineering is one of the most broadly-based engineering disciplines.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bseconomics",
      name: "BS Economics",
      degType: "Graduation",
      subName: "Faculty of Economics",
      description:
        "A bachelor's degree in economics prepares you for a career of business, banking, government, and financial transactions.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bseng",
      name: "BS English",
      degType: "Graduation",
      subName: "Faculty of English",
      description:
        "BS English (Applied Linguistics) is a four-year degree program that has been designed with a special focus on advancing academic and professional development",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsedu",
      name: "BS Education",
      degType: "Graduation",
      subName: "Faculty of Education",
      description:
        "A bachelor's degree in education program blends the core of traditional pedagogical practices with learner-centred and active learning methodologies.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
  
    {
      id: "bsis",
      name: "BS Islamic Studies",
      degType: "Graduation",
      subName: "Faculty of Islamic studies",
      description:
        "BS Islamic Sciences is a program developed for the future requirements of global Islamic society.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsmath",
      name: "BS Mathematics",
      degType: "Graduation",
      subName: "Faculty of Mathematics",
      description:
        "A BS in Mathematics provides broad knowledge of mathematics topics with depth in certain areas such as algebra, calculus, functional analysis.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bssocio",
      name: "BS Sociology",
      degType: "Graduation",
      subName: "Faculty of Sociology",
      description:
        "A bachelor of science (BS) in sociology offers a broader foundation in statistics, some calculus, and data analysis.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsurdu",
      name: "BS Urdu",
      degType: "Graduation",
      subName: "Faculty of Urdu",
      description:
        "Bs urdu is a unique degree which provides vaste knowledge to students about urdu adab",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsps",
      name: "BS Political Science",
      degType: "Graduation",
      subName: "Faculty of Political Science",
      description:
        "The Bachelors Program in Political Science considers the subject from a political, philosophical and historical point of view",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bschemPM",
      name: "BS Chemistry (Pre-Medical)",
      degType: "Graduation",
      subName: "Faculty of Chemistry.",
      description:
        "The Bachelor of Science Degree in Chemistry prepares students for careers as professional chemists and serves as a foundation for careers in other fields such as biology and medicine.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsphy",
      name: "BS Physics",
      degType: "Graduation",
      subName: "Faculty of Physics",
      description:
        "BS Physics, a four year degree program, not only enables the students to scientifically understand and analyze the behavior of nature but orientate them with many interdisciplinary subjects",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsstat",
      name: "BS Statistics",
      degType: "Graduation",
      subName: "Faculty of Statistics",
      description:
        "The Bachelor of Science in Statistics is a degree program emphasizing statistics both as a science unto itself and as a service science, with powerful applications.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bszology",
      name: "BS Zology",
      degType: "Graduation",
      subName: "Faculty of Botony",
      description:
        "The program is solidly grounded in the basic sciences (general biology, chemistry, math and physics) needed to understand the latest research in botany. ",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsgeo",
      name: "BS Geography",
      degType: "Graduation",
      subName: "Faculty of Geography",
      description:
        "With the B.S. in Geography, you can focus on specific areas such as climate change, fire history, biogeography, arid lands, or other topics that bridge the physical sciences.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bsmcom",
      name: "BS Mass Communication",
      degType: "Graduation",
      subName: "Faculty of Mass Communiaction.",
      description:
        "Bachelor of Science in Mass Communication is designed for students who want to obtain a background in general communication skills while concentrating in any one of the areas.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
    {
      id: "bscom",
      name: "BS Computer Science",
      degType: "Graduation",
      subName: "Faculty of Information Technology",
      description:
        "The Bachelor of Computer Science is a bachelor's degree awarded by some universities for completion of an undergraduate program in computer science.",
      img: "./Material/botany.jpg",
      subjects:[
        [
          'English',
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'English',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'zoology'
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Islamiyat',
          'computer',
        ],
        [
          'Biology',
          'Islamiyat',
          'computer',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ],
        [
          'Islamiyat',
          'computer',
          'urdu',
          'Biology',
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
        ],
        [
          'Math', 
          'urdu',
          'Islamiyat',
          'computer',
          'urdu',
        ]
      ],
      Jobs: [
        "Business",
        "commerece",
        "Admin",
        "Management",
        "School",
        "University",
        "colleges",
        "Government",
      ],
    },
  ];
  let colleges = [
    {
      id: "GGCS",
      name: "Govt Graduate College Of Science",
      subName: "A Intermediate and Bs Level institute",
      description:
        "Secondary education is an important segment in every person's life.  raise a person's economic status and reduce infant",
      degreeAvailable: [
        "FSC(Pre-Engineering)",
        "FSC(Pre-Medical)",
        "ICS(Physics)",
        "ICS (Statistics)",
        "ICS (Economics)",
        "ICom",
        "BS (BBA)",
        "BS (Botany)",
        "BS Chemistry (Pre-Medical)",
        "BS Chemistry (Pre-Engineering)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Computer Science",
        "BS Islamic Studies",
        "BS Mathematics",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Zology",
        "BS Geography",
      ]
    },
    {
      id: "GGTC",
      name: "Govt Graduate Township College",
      subName: "A Intermediate and Bs Level institute",
      description:
        "Secondary education is an important segment in every person's life. facts will show",
      degreeAvailable: [
        "FSC(Pre-Engineering)",
        "FSC(Pre-Medical)",
        "ICS(Physics)",
        "ICS (Statistics)",
        "ICS (Economics)",
        "ICom",
        "BS (BBA)",
        "BS (Botany)",
        "BS Chemistry (Pre-Medical)",
        "BS Chemistry (Pre-Engineering)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Computer Science",
        "BS Mathematics",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Zology",
        "BS Geography",
      ],
      lastYearMerit: {
        FSCpe: 896,
        FSCpm: 920,
        ICSp: 846,
        ICSs: 652,
        ICSe: 750,
        ICOM: 500,
      },
    },
    {
      id: "GGMAOC",
      name : "Govt graduate MAO College",
      subName: "A Intermediate and Bs Level institute",
      description:
        "Secondary education is an important segment in every person's life.rates as these listed facts will showSecondary education is an important segment in every person's life.",
      btnTitle: "See More",
      degreeAvailable: [
        "FSC(Pre-Engineering)",
        "FSC(Pre-Medical)",
        "ICS(Physics)",
        "ICS (Statistics)",
        "ICS (Economics)",
        "BS (BBA)",
        "BS (Botany)",
        "BS Chemistry (Pre-Medical)",
        "BS Chemistry (Pre-Engineering)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Computer Science",
        "BS Mathematics",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Zology",
        "BS Geography",
      ],
      lastYearMerit: {
        FSCpe: 896,
        FSCpm: 920,
        ICSp: 846,
        ICSs: 652,
        ICSe: 750,
        ICOM: 500,
      },
    },
    {
      id: "GGCLC",
      name: "Govt graduate civil-line College",
      subName: "A Intermediate and Bs Level institute",
      description:
        "Secondary education is an important segment in every person's life. facts will show",
      btnTitle: "See More",
      degreeAvailable: [
        "FSC(Pre-Medical)",
        "ICS(Physics)",
        "ICS (Statistics)",
        "ICS (Economics)",
        "ICom",
        "BS (BBA)",
        "BS (Botany)",
        "BS Chemistry (Pre-Medical)",
        "BS Chemistry (Pre-Engineering)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Computer Science",
        "BS Mathematics",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Zology",
        "BS Geography",
      ],
      lastYearMerit: {
        FSCpe: 896,
        FSCpm: 920,
        ICSp: 846,
        ICSs: 652,
        ICSe: 750,
        ICOM: 500,
      },
    },
    {
      id: "GGCC",
      name: "Govt graduate Commerec College",
      subName: "A Intermediate and Bs Level institute",
      image: { mcom },
      description:
        "Secondary education is an important segment in every person's life. facts will show",
      btnTitle: "See",
      degreeAvailable: [
        "FSC(Pre-Engineering)",
        "FSC(Pre-Medical)",
        "ICS(Physics)",
        "ICS (Statistics)",
        "ICS (Economics)",
        "ICom",
        "BS (BBA)",
        "BS (Botany)",
        "BS Chemistry (Pre-Medical)",
        "BS Chemistry (Pre-Engineering)",
        "BS Mass Communication",
        "BS English",
        "BS Economics",
        "BS Education",
        "BS Computer Science",
        "BS Mathematics",
        "BS Political Science",
        "BS Sociology",
        "BS Statistics",
        "BS Urdu",
        "BS Zology",
        "BS Geography",
      ],
      lastYearMerit: {
        FSCpe: 896,
        FSCpm: 920,
        ICSp: 846,
        ICSs: 652,
        ICSe: 750,
        ICOM: 500,
      },
    },
  ];
  return (
    <DataContext.Provider
      value={{
        Degrees: Degrees,
        UserData: User,
        Colleges: colleges,
        IsLoggedIn: IsLoggedIn,
        UserLoginData: UserLoginData,
        UserSignUpData: UserSignUpData,
      }}
    >
      <BrowserRouter>
        <div className={clasess.container}>
          <div className={clasess.item1}>
            <Header
              IsLoggedIn={IsLoggedIn}
              IsNavbarShow={IsNavbarShow}
              setIsNavbarShow={setIsNavbarShow}
              setIsLoggedIn={setIsLoggedIn}
            />
            <img className={clasess.back}src={back} alt="top" />
            <img  className={clasess.topback} src={img} alt="top" />
          </div>
          <div
            style={IsNavbarShow ? { marginLeft: 75 + "px" } : {}}
            className={clasess.item2}
          >
            {IsNavbarShow && (
              <div>
                {IsLoggedIn && <SideNavbar useClickOutside={useClickOutside} setIsNavbarShow={setIsNavbarShow} />}
              </div>
            )}
            <div>
              {FormIsShown && (
                <UserInputForm
                  User={User}
                  setUser={setUser}
                  onClose={HideInputFormFun}
                />
              )}
              <Routes>
                <Route element={<ProtectedRoutes />}>
                  <Route
                    path="/home"
                    element={<Home OnClick={ShowInputFormFun} />}
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/colleges" element={<Colleges />} />
                  <Route path="/degree" element={<Degree />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/Fclg" element={<FilteredColleges />} />
                  <Route path="/seemore" element={<Seemore />} />
                  <Route
                    path="/Fdegree"
                    element={<FilteredDegrees OnClick={ShowInputFormFun}/>}
                  />
                </Route>
                <Route path="/" element={<MainPage />} />
                <Route
                  path="/signup"
                  element={<SignUp setUserSignUpData={setUserSignUpData} />}
                />
                <Route
                  path="/login"
                  element={
                    <Login
                      setUserLoginData={setUserLoginData}
                      IsLoggedIn={IsLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
          <div
            // style={IsNavbarShow ? { marginLeft: 85 + "px" } : {}}
            className={clasess.item3}
          >
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}
