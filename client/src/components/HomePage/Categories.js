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
            {props.itemsByType.map((item, index) => (
                <NavDropdown.Item key={index} href="#" className="custom-dropdown-item">
                  {item}
                </NavDropdown.Item>
              ))}
            </div> 
          </div>
          <div className="col">
            <div className="dropdown-category fw-bold">RENT BY OCCASION</div>
            <div className="dropdown-list">
            {props.itemsByOccasion.map((item, index) => (
                <NavDropdown.Item key={index} href="#" className="custom-dropdown-item">
                  {item}
                </NavDropdown.Item>
              ))}
            </div>
          </div>
        </div>
      </div>
    </NavDropdown>
  );
}

export default Categories;
