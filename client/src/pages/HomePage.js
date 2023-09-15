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
              Discover Your Unique Style
            </h2>
            <p
              className="custom-p"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="500"
            >
              Fashion is not just about clothes; it's about expressing your individuality.
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
                Rent Elegance, Be Yourself
              </h2>
              <p
                className="custom-p"
                data-aos="fade-up"
                data-aos-duration="1300"
                data-aos-delay="500"
              >
                Embrace the art of dressing up, showcasing your authenticity with every outfit.
              </p>
            </p>

            <div class="custom-shape-divider-top-1694504256">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  fill="#c68989"
                  opacity=".25"
                  class="shape-fill"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  fill="#c68989"
                  opacity=".5"
                  class="shape-fill"
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.40C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  fill="#c68989"
                  class="shape-fill"
                ></path>
              </svg>
            </div>

            <p
              className="custom-p"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="500"
            >
              Elevate your style and express your unique fashion identity with every rental.

            </p>
            <Button
              className="custom-button"
              data-aos="zoom-in"
              data-aos-duration="1300"
              data-aos-delay="900"
            >
              Explore Collections
            </Button>
          </div>

        </div>

      </section >

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
            <p className="image-label" data-aos-delay="1500">
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
            <p className="image-label" data-aos-delay="1500">
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
      <ImageGrid />


    </div >
  );
};

export default HomePage;
