import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import "../../styles/Categories.css";

function Categories(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <NavDropdown
      id={props.id}
      title={props.title}
      show={showDropdown}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="dropdown-menu-end">
        <div className="row">
          <div className="col">
            <div className="dropdown-category fw-bold">RENT BY TYPE</div>
            <div className="dropdown-list">
              <NavDropdown.Item className="custom-dropdown-item" href="#">
                Bridal Lehenga
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-dropdown-item" href="#">
                Designer Lehenga
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-dropdown-item" href="#">
                Gown
              </NavDropdown.Item>
            </div>
          </div>
          <div className="col">
            <div className="dropdown-category fw-bold">RENT BY OCCASION</div>
            <div className="dropdown-list">
              <NavDropdown.Item className="custom-dropdown-item" href="#">
                Wedding
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-dropdown-item" href="#">
                Pre-Wedding Shoot
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-dropdown-item" href="#">
                Haldi
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-dropdown-item" href="#">
                Mehndi
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-dropdown-item" href="#">
                Sangeet
              </NavDropdown.Item>
            </div>
          </div>
        </div>
      </div>
    </NavDropdown>
  );
}

export default Categories;
