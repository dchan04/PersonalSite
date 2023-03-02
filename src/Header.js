import './Header.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HeaderComponent() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container className="d-flex justify-content-start">
            <Navbar.Brand href="#"><div className="logo">DC</div></Navbar.Brand>
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
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;