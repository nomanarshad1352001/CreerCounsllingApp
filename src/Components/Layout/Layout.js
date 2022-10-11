import React from "react";
import Footer from "../Footer.js";
import Header from "../Navbars/Header.js";
import SideNavbar from "../Navbars/SideNavbar.js";
import clasess from "./Layout.module.css";
import image from '../Material/career-words.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function() {
  return (
    <div className={clasess.container}>
      <div className={clasess.item1}>
        <Header />
      </div>
      <div className={clasess.item2}>
        {" "}
        <SideNavbar />
      </div>
      <div className={clasess.item3}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="image" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className={clasess.item4}>
        <Footer />
      </div>
    </div>
  );
}
