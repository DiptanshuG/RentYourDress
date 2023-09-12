import React, { useState } from "react";
import "../../styles/Login.css"; // Import your custom CSS file
import "../../styles/LoginSlideIn.css"; // Import your custom CSS file
import log from "../../assets/images/logo2.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

const Account = ({ isOpen, onClose, setShowSignUp, showSignUp }) => {

  // Step 3: Event handler to toggle the state
  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <div className={`login-container ${isOpen ? "open" : ""}`}>
        <div className="login-form">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
              <div className="flex flex-col justify-center items-center h-screen">
                <img
                  src={log}
                  width="50"
                  height="50"
                  className="d-inline-block logo-img align-top"
                  alt="Your Logo"
                  style={{
                    backgroundColor: "#cb9a9a", // Set background color
                    clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)", // Add a custom shape
                    zIndex: -1, // Set z-index property
                  }}
                />
                <h1 className="text-2xl textColor font-bold mb-1">Welcome</h1>
                <p className="font-bold mb-4 mutedColor">
                  Discover the perfect attire to make every moment memorable.
                </p>
                {showSignUp && <SignUpForm />}
                {!showSignUp && <LogInForm />}
                {!showSignUp && (             
                  <div className="text-center">
                    <p>
                      Don't have an account?{" "}
                      <button
                        onClick={handleSignUpClick}
                        className="text-decoration-none text-dark"
                      >
                        <b>Sign Up.</b>
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
