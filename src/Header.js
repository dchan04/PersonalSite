import { useState } from 'react';
import './Header.css';
import Container from "react-bootstrap/Container";
import dcLogo from "./assets/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image';

function HeaderComponent() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <div className="headerContainer d-flex justify-content-start">
                <Navbar.Brand href="#">
                    <Image className="personalLogo" src={dcLogo}></Image>
                </Navbar.Brand>
            <Nav defaultActiveKey="/home">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link eventKey={2} href="#AboutMe">
                    About Me
                </Nav.Link>
                <Nav.Link eventKey={3} href="#Projects">
                    Projects
                </Nav.Link>
                <Nav.Link eventKey={4} href="#Contact">
                    Contact
                </Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
}

export default HeaderComponent;