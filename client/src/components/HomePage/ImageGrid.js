import React from "react";
import cocktail from "../../assets/images/cock2.jpg";
import topRated from "../../assets/images/toprated.jpg";
import top from "../../assets/images/top.jpg";
import bride from "../../assets/images/bride1.jpg";
import men from "../../assets/images/menn.jpg";
import "../../styles/ImageGrid.css";

function ImageGrid() {
  return (
      <div className="section">
        {/* left div with one images */}
        <div className="left-div">
          <img
            src={men}
            alt="Image 1"
            className="image"
            width={400}
            height={400}
          />
        </div>

        {/* right div with four image */}
        <div className="right-div">
          <img
            src={bride}
            alt="Image 2"
            className="image"
            width={400}
            height={200}
          />
          <img
            src={topRated}
            alt="Image 3"
            className="image"
            width={200}
            height={200}
          />
          <img
            src={top}
            alt="Image 4"
            className="image"
            width={200}
            height={200}
          />
          <img
            src={cocktail}
            alt="Image 5"
            className="image"
            width={400}
            height={200}
          />
        </div>
      </div>
  );
}

export default ImageGrid;
