import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import log from "../../assets/images/logo2.png";
import Categories from "./Categories";
import "../../styles/NavbarComponent.css";

const NavbarComponent = () => {
  const [isWomenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [isMenDropdownOpen, setMenDropdownOpen] = useState(false);

  const occasionWear = ["Wedding", "Pre-Wedding Shoot", "Haldi", "Mehndi", "Sangeet"];

  const womenItems = ["Bridal Lehenga", "Designer Lehenga", "Gown"];
  const menItems = ["Sherwani", "Suit", "Blazer", "Taxedo"];

  const handleDropdown = (dropdown) => {
    setWomenDropdownOpen(dropdown === "women");
    setMenDropdownOpen(dropdown === "men");
  };

  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="mr-auto">
          <img
            src={log}
            width="50"
            height="50"
            className="d-inline-block logo-img align-top"
            alt="Your Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Categories
              title="Women's Wear"
              id="women-dropdown"
              itemsByType={womenItems}
              itemsByOccasion={occasionWear}
              onMouseEnter={() => handleDropdown("women")}
              show={isWomenDropdownOpen}
            />
            <Categories
              title="Men's Wear"
              id="men-dropdown"
              itemsByType={menItems}
              itemsByOccasion={occasionWear}
              onMouseEnter={() => handleDropdown("men")}
              show={isMenDropdownOpen}
            />
            <Nav.Link href="#">Customer Stories</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="mr-2 custom-nav-link">
              <FaUser />
            </Nav.Link>
            <Nav.Link href="#" className="mr-2 custom-nav-link">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#" className="mr-2 custom-nav-link">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
