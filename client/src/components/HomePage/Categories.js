import React from "react";
import { NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../styles/Categories.css";

function Categories(props) {
  const { id, title, show, onMouseEnter, itemsByType, itemsByOccasion } = props;

  return (
    <NavDropdown
      id={id}
      title={title}
      className="categories-dropdown"
      show={show}
      onMouseEnter={onMouseEnter}

    >
      <div className="dropdown-menu-end">
        <div className="row">
          <DropdownColumn title="RENT BY TYPE" items={itemsByType} />
          <DropdownColumn title="RENT BY OCCASION" items={itemsByOccasion} />
        </div>
      </div>
    </NavDropdown>
  );
}

function DropdownColumn({ title, items }) {
  return (
    <div className="col">
      <div className="dropdown-category fw-bold">{title}</div>
      <div className="dropdown-list">
        {items.map((item, index) => (
          <NavDropdown.Item
            key={index}
            href="#"
            className="custom-dropdown-item"
          >
            {item}
          </NavDropdown.Item>
        ))}
      </div>
    </div>
  );
}

Categories.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,

  onMouseEnter: PropTypes.func.isRequired,
  itemsByType: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemsByOccasion: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Categories;
