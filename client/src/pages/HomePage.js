import React from "react";
import "../styles/HomePage.css";
import ImageSlider from "../components/HomePage/ImageSlider";
import { Button } from "react-bootstrap";
import forHer from "../assets/images/her1.jpg";
import forHim from "../assets/images/forhim.jpg";
import Thoughts from "../components/HomePage/Thoughts";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import ImageGrid from "../components/HomePage/ImageGrid";

const HomePage = () => {
  const thoughsList = [
    {
      id: 1,
      text: "“The customer service is great & shipping is so fast!”",
      author: "— Natalie R.",
      color: "dark",
    },
    {
      id: 2,
      text: "“It has saved me SO much time + money!”",
      author: "— Heather K.",
      color: "light",
    },
    {
      id: 3,
      text: "“The clothes are kept in pristine condition.”",
      author: "— Chloe A.",
      color: "light",
    },
    {
      id: 4,
      text: "“Returning is so simple, I get a new order every week!”",
      author: "— Corrine R.",
      color: "dark",
    },
  ];

  return (
    <div className="hero-section">
      <section className="content-container1">
        <ImageSlider />
        <div className="text-container m-5">
          <div>
            <h2
              className="h2 text-black"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Custom – Character – Class
            </h2>
            <p
              className="custom-p"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="500"
            >
              Fashion is like eating, you shouldn't stick to the same menu.
            </p>
            <p
              className="custom-p"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="500"
            >
              <h2
                className="h2 text-black"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Custom – Character – Class
              </h2>
              <p
                className="custom-p"
                data-aos="fade-up"
                data-aos-duration="1300"
                data-aos-delay="500"
              >
                Fashion is like eating, you shouldn't stick to the same menu.
              </p>
            </p>
            <p
              className="custom-p"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="500"
            >
              Don’t be into trends, Don’t make fashion own you, but you decide
              what you are, what you want to express by the way you dress and
              the way you live.
            </p>
            <Button
              className="custom-button"
              data-aos="zoom-in"
              data-aos-duration="1300"
              data-aos-delay="900"
            >
              Rent Now
            </Button>
          </div>
        </div>
      </section>

      <section className="content-container3">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} className="text-center mb-4">
              <h2 className="text-uppercase">How RYD Works</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={3} sm={6} xs={12}>
              <div className="featured-item text-center mb-4">
                <img
                  src="https://www.rentanattire.com/assetsmain/img/home/Hanger.png"
                  alt="Select a Style"
                />
                <div className="title text-uppercase">
                  <h4 className="font-cursive-bold  primaryDarkColor">
                    Select a look
                  </h4>
                </div>
                <div className="desc">
                  Find the clothes and accessories that match your style from
                  our designer collection.{" "}
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className="featured-item text-center mb-4">
                <img
                  src="https://www.rentanattire.com/assetsmain/img/home/book-your-outfit.png"
                  alt="Book your Outfit"
                />
                <div className="title text-uppercase">
                  <h4 className="font-cursive-bold  primaryDarkColor">
                    Confirm
                  </h4>
                </div>
                <div className="desc">
                  Book your look for 3, 5, 7 or 10 days. Outfit will be altered
                  to your size and dry cleaned before delivery.
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className="featured-item text-center mb-4">
                <img
                  src="https://www.rentanattire.com/assetsmain/img/home/flaunt-it.png"
                  alt="Flaunt It"
                />
                <div className="title text-uppercase">
                  <h4 className="font-cursive-bold  primaryDarkColor ">
                    Show it off
                  </h4>
                </div>
                <div className="desc">
                  Flaunt your look with that perfect outfit chosen by you and
                  enjoy the compliments.
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className="featured-item text-center mb-4">
                <img
                  src="https://www.rentanattire.com/assetsmain/img/home/Freepickup.png"
                  alt="Return It"
                />
                <div className="title text-uppercase">
                  <h4 className="font-cursive-bold  primaryDarkColor">
                    Give it Back
                  </h4>
                </div>
                <div className="desc">
                  Pack the outfit and we'll pick it up a day after your occasion
                  or the dates chosen by you.
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <img
                src="https://www.rentanattire.com/assetsmain/img/home/nos.png"
                style={{ maxWidth: "85%", marginTop: "-20px" }}
                className="steps"
                alt="Steps"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* categories  */}
      <section className="content-container1">
        <div className="image-container m-auto">
          <div className="image-with-label">
            <img
              src={forHer}
              alt="Image 1"
              className="aos-image"
              data-aos="slide-left"
              data-aos-duration="1500"
            />
            <p class="image-label" data-aos-delay="1500">
              For Her
            </p>
          </div>
          <div className="image-with-label">
            <img
              src={forHim}
              alt="Image 2"
              className="aos-image"
              data-aos="slide-right"
              data-aos-duration="1500"
            />
            <p class="image-label" data-aos-delay="1500">
              For Him
            </p>
          </div>
        </div>
      </section>

      {/* thoughts section */}
      <section className="content-container3">
        <Thoughts thoughsList={thoughsList} />
      </section>

      {/* images section  */}
       <ImageGrid/>

      <Footer />
    </div>
  );
};

export default HomePage;
