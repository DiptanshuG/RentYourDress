import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" className="flex-grow-1">Women's Wear</Nav.Link>
                        <Nav.Link href="#" className="flex-grow-1">Men's Wear</Nav.Link>
                        <Nav.Link href="#" className="flex-grow-1">Customer Stories</Nav.Link>
                        <Nav.Link href="#"><FaUser /></Nav.Link>
                        <Nav.Link href="#"><FaSearch /></Nav.Link>
                        <Nav.Link href="#"><FaShoppingCart /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
