import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import '../../styles/NavbarComponent.css';
import log from "../../assets/images/logo.png"

const NavbarComponent = () => {
    return (
        <Navbar  variant="dark" expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#" className="mr-auto">
                    <img
                        src={log}
                        width="30"
                        height="30"
                        className="d-inline-block logo-img  align-top"
                        alt="Your Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#" className="mx-3">Menu 1</Nav.Link>
                        <Nav.Link href="#" className="mx-3">Menu 2</Nav.Link>
                        <Nav.Link href="#" className="mx-3">Menu 3</Nav.Link>
                        <Nav.Link href="#" className="mx-3">Menu 4</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" className="mr-2">
                            <FaUser />
                        </Nav.Link>
                        <Nav.Link href="#" className="mr-2">
                            <FaSearch />
                        </Nav.Link>
                        <Nav.Link href="#">
                            <FaShoppingCart />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
