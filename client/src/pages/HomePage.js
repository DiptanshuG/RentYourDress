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
            <h2>Custom – Character – Class.</h2>
            <p>Fashion is like eating, you shouldn't stick to the same menu.</p>
            <p>
              Don’t be into trends. Don’t make fashion own you, but you decide
              what you are, what you want to express by the way you dress and the
              way you live.
            </p>
            <Button variant="primary">Rent Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
