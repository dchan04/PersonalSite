import "./Header.css";
import dcLogo from "./assets/logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
function HeaderComponent() {
  return (
    <Navbar expand="sm">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image className="personalLogo" src={dcLogo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav defaultActiveKey="/home">
            <Nav.Link href="#Home">
              <span className="link-text">Home</span>
              <span className="linkAnimation"></span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#AboutMe">
              <span className="link-text">About Me</span>
              <span className="linkAnimation"></span>
            </Nav.Link>
            <Nav.Link eventKey={3} href="#Projects">
              <span className="link-text">Projects</span>
              <span className="linkAnimation"></span>
            </Nav.Link>
            <Nav.Link eventKey={4} href="#Contact">
              <span className="link-text">Contact</span>
              <span className="linkAnimation"></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
