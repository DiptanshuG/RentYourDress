import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#cb9a9a',
        color: 'white',
        padding: '40px 0',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              in nisi vitae justo euismod blandit.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>
              Email: example@example.com
              <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <div>
              <a
                href="#"
                className="social-icon"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="social-icon"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="social-icon"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          marginTop: '20px',
          paddingTop: '20px',
          textAlign: 'center',
        }}
      >
        &copy; {new Date().getFullYear()} Your Dress Rental
      </div>
    </footer>
  );
};

export default Footer;
