import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/ImageZoom.css"
function ImageZoom({ src, alt, width, height }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`image-zoom-container ${isHovered ? "hovered" : ""}`}
      style={{ width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className={`image-zoom ${isHovered ? "zoomed" : ""}`}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

ImageZoom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageZoom;
