import React, { useEffect, useRef, useState } from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { FaUser, FaSearch, FaShoppingCart, FaArrowCircleRight, FaArrowAltCircleRight, } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import log from "../../assets/images/logo2.png";
import Categories from "./Categories";
import "../../styles/NavbarComponent.css";
import Login from "../Sidebars/Login";

const NavbarComponent = () => {
  const [isWomenDropdownOpen, setWomenDropdownOpen] = useState(false);
  const [isMenDropdownOpen, setMenDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isSearchOpen, setSearchOpen] = useState(false); // State to control search input visibility

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };


  const occasionWear = ["Wedding", "Pre-Wedding Shoot", "Haldi", "Mehndi", "Sangeet"];

  const womenItems = ["Bridal Lehenga", "Designer Lehenga", "Gown"];
  const menItems = ["Sherwani", "Suit", "Blazer", "Taxedo"];

  const handleDropdown = (dropdown) => {
    setWomenDropdownOpen(dropdown === "women");
    setMenDropdownOpen(dropdown === "men");
  };

  const closeDropdowns = () => {
    setWomenDropdownOpen(false);
    setMenDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setWomenDropdownOpen(false);
      setMenDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [isLoginOpen, setLoginOpen] = useState(false); // State to control login visibility

  const toggleLogin = () => {
    setLoginOpen(!isLoginOpen);
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
          <Nav className="mx-auto" ref={dropdownRef}>
            <Categories
              title="Women's Wear"
              id="women-dropdown"
              itemsByType={womenItems}
              itemsByOccasion={occasionWear}
              onMouseEnter={() => handleDropdown("women")}
              show={isWomenDropdownOpen}
              ref={dropdownRef}
            />
            <Categories
              title="Men's Wear"
              id="men-dropdown"
              itemsByType={menItems}
              itemsByOccasion={occasionWear}
              onMouseEnter={() => handleDropdown("men")}
              show={isMenDropdownOpen}
              ref={dropdownRef}
            />
            <Nav.Link href="#">Customer Stories</Nav.Link>
          </Nav>
          <Form inline className="ml-3 d-flex search-form">
            <div className="d-flex justify-content-start">
              <FormControl
                type="text"
                placeholder="Search your attire"
                className={`mr-sm-2 search-input ${isSearchOpen ? "search-input-open" : ""
                  }`} />

            </div>

            <button
              className=" search-close"
              type="button"
              onClick={toggleSearch}
            >
              <FaSearch color="white" />
            </button>
          </Form>
          <Nav>
            <Nav.Link href="#" className="mr-2 custom-nav-link" onClick={toggleLogin}>
              <FaUser />
            </Nav.Link>

            <Nav.Link href="#" className="mr-2 custom-nav-link">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Login isOpen={isLoginOpen} onClose={toggleLogin} />

      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
