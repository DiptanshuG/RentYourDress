import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';
import '../../styles/NavbarComponent.css';
import log from "../../assets/images/logo.png"
import Categories from './Categories';

const NavbarComponent = () => {
    const womenItemsType = [
        "Bridal Lehenga",
        "Designer Lehenga",
        "Gown",
      ];

      const occasionWear = [
        "Wedding",
        "Pre-Wedding Shoot",
        "Haldi",
        "Mehndi",
        "Sangeet",
      ];

      const menItemsType = [
        "Sherwani",
        "Suit",
        "Blazer",
        "Taxedo"
      ];
      
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
                    <Categories title="Women's Wear" id="women-dropdown" womenItemsByType={womenItemsType} itemsByOccasion={occasionWear}/>
                        <Categories title="Men's Wear" id="men-dropdown" menItemsByType={menItemsType} itemsByOccasion={occasionWear}/>
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
