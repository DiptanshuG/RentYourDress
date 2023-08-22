import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/images/dress1.jpg";
import image2 from "../../assets/images/dress2.jpg";
import image3 from "../../assets/images/dress5.jpg";
import image4 from "../../assets/images/dress3.jpeg";
import image5 from "../../assets/images/dress4.jpg";
import image6 from "../../assets/images/men1.jpg";
import "../../styles/ImageSlider.css"; 

const ImageSlider = () => {
    return (
      <div className="slider-container">
        <Carousel showArrows={false} showThumbs={false} autoPlay={true} interval={1000}  infiniteLoop={true} showStatus={false}>
          <div className="slide">
            <img src={image1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={image2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={image3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={image4} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={image5} alt="Slide 3" />
          </div>
          <div className="slide">
            <img src={image6} alt="Slide 3" />
          </div>
        </Carousel>
      </div>
    );
  };
  

export default ImageSlider;
