import React from "react";
import "../styles/HomePage.css";
import ImageSlider from "../components/HomePage/ImageSlider";
import { Button } from "react-bootstrap";

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
    </div>
  );
};

export default HomePage;
