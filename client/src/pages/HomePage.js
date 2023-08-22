import React from "react";
import "../styles/HomePage.css";
import ImageSlider from "../components/HomePage/ImageSlider";
import { Button } from "react-bootstrap";
import forHer from "../assets/images/her1.jpg";
import forHim from "../assets/images/forhim.jpg";

const HomePage = () => {
  return (
    <div className="hero-section">
      <section className="content-container">
        <div className="slider-container">
          <ImageSlider />
        </div>
        <div className="text-container m-5">
          <div>
            <h2 className="h2 text-black" data-aos="fade-up" data-aos-duration="1500">Custom – Character – Class</h2>
            <p className="custom-p" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="500">Fashion is like eating, you shouldn't stick to the same menu.</p>
            <p className="custom-p" data-aos="fade-up"data-aos-duration="1300" data-aos-delay="500">
              Don’t be into trends, Don’t make fashion own you, but you decide
              what you are, what you want to express by the way you dress and the
              way you live.
            </p>
            <Button className="custom-button" data-aos="zoom-in" data-aos-duration="1300" data-aos-delay="900">Rent Now</Button>
          </div>
        </div>
      </section>
      <section className="content-container"> 
      <div className="image-container">
      <div className="image-with-label">
    <img src={forHer} alt="Image 1" className="aos-image" data-aos="slide-left" data-aos-duration="1500" />
    <p class="image-label" data-aos-delay="1500">For Her</p>
  </div>
  <div className="image-with-label">
    <img src={forHim} alt="Image 2" className="aos-image" data-aos="slide-right" data-aos-duration="1500" />
    <p class="image-label" data-aos-delay="1500">For Him</p>
  </div>
</div>
      </section>
    
    </div>
  );
};

export default HomePage;
