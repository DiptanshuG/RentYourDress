import React from "react";
import cocktail from "../../assets/images/cock2.jpg";
import topRated from "../../assets/images/toprated.jpg";
import top from "../../assets/images/top.jpg";
import bride from "../../assets/images/bride1.jpg";
import men from "../../assets/images/menn.jpg";
import "../../styles/ImageGrid.css";
import ImageZoom from "../ImageZoom";

const imageData = [
  { src: bride, alt: "Image Description", width: 400, height: 200 },
  { src: topRated, alt: "Image 3", width: 200, height: 200 },
  { src: top, alt: "Image 4", width: 200, height: 200 },
  { src: cocktail, alt: "Image 5", width: 400, height: 200 },
];
function ImageGrid() {
  return (
    <div className="section-image-grid">
      <div className="left-div-image">
        <ImageZoom
          src={men}
          alt="Image Description"
        />
      </div>
      <div className="right-div-image">
        {imageData.map((image, index) => (
          <div className="right-image-container"  key={index}>
            <ImageZoom key={index} {...image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
